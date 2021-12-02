export type SortOption = 'alpha' | 'rAlpha';
export type METHOD = 'GET' | 'POST' | 'DELETE' | 'UPDATE';
export type ChannelType = '0' | '1';
export type UserType = 'local' | 'github';

export interface Workspace {
  id: string;
  profile?: string;
  name: string;
  fileId: number | null;
}

export interface Channel {
  id: string;
  name: string;
  private: ChannelType;
  description?: string;
  topic?: string;
  workspace: Workspace;
  workspaceId: string;
  createdAt: string;
}

export interface User {
  id: string;
  nickname: string;
  email: string;
  type: UserType;
  password: string;
}

export interface UserHasWorkspace {
  id: string;
  nickname: string;
  description: string;
  theme: number;
  userId: string;
  workspaceId: string;
  fileId?: number;
  createdAt: string;
}

export interface IThread {
  userHasWorkspace: { nickname: string; fileUrl: string };
  message: string;
  createdAt: string;
  id: string;
  userHasWorkspaceId: string;
  replys: unknown[];
  reactions: unknown[];
  files: unknown[];
  threadId?: string;
}

export interface Message {
  userHasWorkspace: { nickname: string; fileUrl: string };
  message: string;
  createdAt: string;
  id: string;
  userHasWorkspaceId: string;
  replys?: Message[];
  reactions: Reaction[];
  files: File[];
  threadId?: string;
}

export interface Reaction {
  createdAt: string;
  emoji: string;
  id: string;
  replyId: string;
  threadId: string;
  userHasWorkspaceId: string;
}
