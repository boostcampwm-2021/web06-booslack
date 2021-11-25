import { Router } from 'express';
import {
  getOneReply,
  addOneReply,
  updateOneReply,
  deleteOneReply,
} from '../service/ReplyService';

const ReplyRouter = Router();

//ReplyRouter.get('/', getAllReply);
ReplyRouter.get('/:id', getOneReply);
ReplyRouter.post('/', addOneReply);
ReplyRouter.put('/:id', updateOneReply);
ReplyRouter.delete('/:id', deleteOneReply);

export default ReplyRouter;
