import { IUser } from 'src/model/User';

declare module 'express' {
  export interface Request {
    body: {
      user: IUser;
      nickname: string;
      email: string;
      type: string;
    };
  }
}
