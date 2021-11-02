import { IUser } from 'src/model/User';

declare module 'express' {
  export interface Request {
    body: {
      user: IUser;
    };
  }
}
