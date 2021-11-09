import { Router } from 'express';
import {
  getAllUsers,
  getOneUser,
  addOneUser,
  updateOneUser,
  deleteOneUser,
  addUserToWorkspace,
} from '../service/UserService';

const userRouter = Router();

userRouter.post('/userToWorkspace', addUserToWorkspace);

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getOneUser);
userRouter.post('/', addOneUser);
userRouter.put('/:id', updateOneUser);
userRouter.delete('/:id', deleteOneUser);

export default userRouter;
