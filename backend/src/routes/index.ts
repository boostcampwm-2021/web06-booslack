import { Router } from 'express';
import channelRouter from './ChannelController';
import userRouter from './UserController';
import workspaceRouter from './WorkspaceController';
import loginRouter from './LoginController';
import threadRouter from './ThreadController';
import userHasWorkspaceRouter from './UserHasWorkspaceController';
import FileRouter from './FileController';

const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/userHasWorkspaces', userHasWorkspaceRouter);
baseRouter.use('/workspaces', workspaceRouter);
baseRouter.use('/channels', channelRouter);
baseRouter.use('/threads', threadRouter);
baseRouter.use('/login', loginRouter);
baseRouter.use('/files', FileRouter);

export default baseRouter;
