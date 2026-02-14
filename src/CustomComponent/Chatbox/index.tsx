import React, { useState } from "react";
import styles from "./index.module.css";
import answerStyles from "./styles/answer.module.css";
import data from "./data.json";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleTagClick = (answer:string) => {
    setSelectedAnswer(answer);
  };

  const formatAnswer = (answer:string) => {
    return { __html: answer };
  };

  return (
    <div className={styles.chatboxContainer}>
      <button className={styles.chatboxToggle} onClick={toggleChatbox}>
        💬
      </button>
      {isOpen && (
        <div className={styles.chatbox}>
          <div className={styles.chatHeader}>
            <h5>Ask Me </h5>
          </div>
          <div className={styles.chatTags}>
            {data.messages.map((message) => (
              <button
                key={message.id}
                className={`${styles.chatTag} ${selectedAnswer === message.answer ? styles.activeTag : ""}`}
                onClick={() => handleTagClick(message.answer)}
              >
                {message.question}
              </button>
            ))}
          </div>
          <div className={answerStyles.answerContainer}>
            {selectedAnswer ? (
              <div dangerouslySetInnerHTML={formatAnswer(selectedAnswer)} />
            ) : (
              <p>Select a question to see the answer</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
