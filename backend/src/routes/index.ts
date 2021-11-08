import { Router } from 'express';
import channelRouter from './ChannelController';
import userRouter from './UserController';
import workspaceRouter from './WorkspaceController';
import loginRouter from './LoginController';

const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/workspaces', workspaceRouter);
baseRouter.use('/channels', channelRouter);
baseRouter.use('/login', loginRouter);

export default baseRouter;
