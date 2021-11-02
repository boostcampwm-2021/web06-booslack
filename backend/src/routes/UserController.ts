import { Router } from 'express';
import {
  getAllUsers, getOneUser,
  addOneUser, updateOneUser,
  deleteOneUser,
} from '../service/UserService';

const userRouter = Router();

userRouter.get('/all', getAllUsers);
userRouter.get('/one/:id', getOneUser);
userRouter.post('/add', addOneUser);
userRouter.put('/update/:id', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);

export default userRouter;
