import { Router } from 'express';
import channelRouter from './ChannelController';
import userRouter from './UserController';
import workspaceRouter from './WorkspaceController';

const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/workspace', workspaceRouter);
baseRouter.use('/channel', channelRouter);

export default baseRouter;
