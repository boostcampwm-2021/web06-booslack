import { Router } from 'express';
import channelRouter from './ChannelController';
import userRouter from './UserController';
import workspaceRouter from './WorkspaceController';

const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/workspaces', workspaceRouter);
baseRouter.use('/channels', channelRouter);

export default baseRouter;
