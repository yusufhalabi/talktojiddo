export const ConversationStatus = {
  ACTIVE: "ACTIVE",
  ENDED: "ENDED",
  ERROR: "ERROR",
} as const;

export type IConversation = {
  conversation_id: string;
  conversation_name: string;
  status: typeof ConversationStatus;
  conversation_url: string;
  replica_id: string | null;
  persona_id: string | null;
  created_at: string;
};
