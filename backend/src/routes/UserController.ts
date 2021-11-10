import { Router } from 'express';
import {
  getAllUsers,
  getOneUser,
  addOneUser,
  updateOneUser,
  deleteOneUser,
  addUserToWorkspace,
  getAllUsersWithChannelInfo,
} from '../service/UserService';

const userRouter = Router();

userRouter.post('/userToWorkspace', addUserToWorkspace);
userRouter.get('/workspaces', getAllUsersWithChannelInfo);

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getOneUser);
userRouter.post('/', addOneUser);
userRouter.put('/:id', updateOneUser);
userRouter.delete('/:id', deleteOneUser);

export default userRouter;
