export type Chat = {
  id: string;
  name: string;
  summary: string;
};

export type ChatMessage = {
  content: string;
  isFromUser: boolean;
};
