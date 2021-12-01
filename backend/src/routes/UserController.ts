import { Router } from 'express';
import {
  getAllUsers,
  getOneUser,
  addOneUser,
  findOneUser,
  updateOneUser,
  deleteOneUser,
  addUserToWorkspace,
  getAllUsersWithChannelInfo,
  deleteUserFromChannel,
} from '../service/UserService';

const userRouter = Router();

userRouter.post('/userToWorkspace', addUserToWorkspace);
userRouter.get('/workspaces', getAllUsersWithChannelInfo);

userRouter.get('/', getAllUsers);
userRouter.get('/find', findOneUser);
userRouter.get('/:id', getOneUser);
userRouter.post('/', addOneUser);
userRouter.put('/:id', updateOneUser);
userRouter.delete('/:id', deleteOneUser);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
userRouter.delete('/:workspaceId/:channelId', deleteUserFromChannel);
export default userRouter;
