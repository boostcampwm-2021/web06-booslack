import { IChannel } from 'src/model/Channel';
import { IUser } from 'src/model/User';
import { IWorkspace } from 'src/model/Workspace';

declare module 'express' {
  export interface Request {
    body: {
      user: IUser;
      nickname: string;
      email: string;
      type: string;
      workspace: IWorkspace;
      name: string;
      password: string;
      profile: string;
      channel: IChannel;
      description: string;
      message: string;
      time: Date;
      code: string;
      theme: string;
      fileId: string;
      topic: string;
      emoji: string;

      userId: string;
      channelId: string;
      workspaceId: string;
      userHasWorkspaceId: string;
      threadId: string;
      reactionId: string;
    };
  }
}
