export interface ChatMessage {
  id: string;
  question: string;
  answer: string;
}

export interface ChatboxState {
  isOpen: boolean;
  selectedId: string | null;
}
