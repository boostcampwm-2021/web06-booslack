export type SortOption = 'alpha' | 'rAlpha';
export type METHOD = 'GET' | 'POST' | 'DELETE' | 'UPDATE';
export type ChannelType = 'public' | 'private';
export type UserType = 'local' | 'github';

export interface Workspace {
  id: number;
  profile?: string;
  name: string;
}

export interface Channel {
  id: number;
  name: string;
  type: ChannelType;
  description?: string;
  workspaceId: number;
}

export interface User {
  id: number;
  nickname: string;
  email: string;
  type: UserType;
  password: string;
}
