export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatboxState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}
