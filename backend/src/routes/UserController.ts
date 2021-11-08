import { Router } from 'express';
import {
  getAllUsers,
  getOneUser,
  addOneUser,
  updateOneUser,
  deleteOneUser,
} from '../service/UserService';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getOneUser);
userRouter.post('/', addOneUser);
userRouter.put('/:id', updateOneUser);
userRouter.delete('/:id', deleteOneUser);

export default userRouter;
