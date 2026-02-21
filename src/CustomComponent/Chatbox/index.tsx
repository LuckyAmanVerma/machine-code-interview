import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import { Message } from "./types";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const RAG_API_URL =
    "https://aman-portfolio-ai-server.onrender.com/api/chat";

  const CHATBOX_ID = "chatbox-chat";
  const CHATBOX_TITLE_ID = "chatbox-title";
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  const handleChatboxKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const validateInput = (text: string): boolean => {
    if (text.trim().length < 4) {
      setValidationError(
        "Message must be at least 4 characters long"
      );
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (validationError && value.trim().length >= 4) {
      setValidationError("");
    }
  };

  const checkRateLimit = (): boolean => {
    // client side reate limit  max 5 messages per hour , if user exceed the limit show error message and return true
    const messagesSent = messages.filter(
      (msg) => msg.role === "user" && (new Date().getTime() - msg.timestamp.getTime()) < 60 * 60 * 1000
    ).length;
    if (messagesSent >= 5) {
      alert("You have reached the maximum of 5 messages per hour. Please try again later.");
      return true;
    }
    return false;
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if(checkRateLimit()) return false;
    if (!validateInput(inputValue)) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(RAG_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.success
          ? data.reply
          : data.error || "Sorry, I couldn't process your request. Please try again.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "Sorry, there was an error connecting to the server. Please try again later.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatboxContainer}>
      <button
        className={styles.chatboxToggle}
        onClick={toggleChatbox}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        aria-controls={CHATBOX_ID}
      >
        💬
      </button>

      {isOpen && (
        <div
          className={styles.chatbox}
          id={CHATBOX_ID}
          role="dialog"
          aria-modal="false"
          aria-labelledby={CHATBOX_TITLE_ID}
          onKeyDown={handleChatboxKeyDown}
        >
          <div className={styles.chatHeader}>
            <h5 id={CHATBOX_TITLE_ID}>Ask About Aman</h5>
            <button
              className={styles.closeBtn}
              onClick={toggleChatbox}
              aria-label="Close chatbox"
            >
              ✕
            </button>
          </div>

          <div
            className={styles.messagesContainer}
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.length === 0 ? (
              <div className={styles.welcomeMessage}>
                <p>👋 Hello! Ask me anything about my experience, skills, or projects.</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.messageWrapper} ${
                    message.role === "user" ? styles.userMessage : styles.assistantMessage
                  }`}
                  role="article"
                  aria-label={
                    message.role === "user" ? "User message" : "Assistant message"
                  }
                >
                  <div className={styles.message}>
                    {message.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className={`${styles.messageWrapper} ${styles.assistantMessage}`}>
                <div className={styles.message}>
                  <div className={styles.loadingDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputSection}>
            {validationError && (
              <div id="chat-validation-error" className={styles.errorMessage} role="alert">
                {validationError}
              </div>
            )}
            <form onSubmit={handleSendMessage} className={styles.inputForm}>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ask about my experience..."
                className={styles.inputField}
                disabled={isLoading}
                aria-invalid={validationError ? true : false}
                aria-describedby={validationError ? "chat-validation-error" : undefined}
                aria-label="Message input"
              />
              <button
                type="submit"
                className={styles.sendButton}
                disabled={isLoading || inputValue.trim().length < 4}
                aria-label="Send message"
              >
                ➤
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
