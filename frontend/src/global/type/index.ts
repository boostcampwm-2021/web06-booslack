export type SortOption = 'alpha' | 'rAlpha';
export type METHOD = 'GET' | 'POST' | 'DELETE' | 'UPDATE';
export type ChannelType = '0' | '1';
export type UserType = 'local' | 'github';

export interface Workspace {
  id: number;
  profile?: string;
  name: string;
  fileId: number | null;
}

export interface Channel {
  id: number;
  name: string;
  private: ChannelType;
  description?: string;
  topic?: string;
  workspace: Workspace;
  workspaceId: number;
  createdAt: string;
}

export interface User {
  id: number;
  nickname: string;
  email: string;
  type: UserType;
  password: string;
}

export interface UserHasWorkspace {
  id: number;
  nickname: string;
  description: string;
  theme: number;
  userId: number;
  workspaceId: number;
  fileId?: number;
  createdAt: string;
}

export interface IThread {
  userHasWorkspace: { nickname: string };
  message: string;
  createdAt: string;
  id: string;
  userHasWorkspaceId: string;
  replys: unknown[];
  reactions: unknown[];
  threadId?: number;
}
