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
      profile: string;
      channel: IChannel;
      description: string;

      userId: string;
      channelId: string;
      workspaceId: string;
    };
  }
}
