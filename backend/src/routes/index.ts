import { Router } from 'express';
import userRouter from './UserController';

const baseRouter = Router();
baseRouter.use('/users', userRouter);

export default baseRouter;
