import { Router } from 'express';
import {
  getAllReplys,
  getReply,
  addReply,
  updateReply,
  deleteReply,
} from '../service/ReplyService';

const replyRouter = Router();

replyRouter.get('/', getAllReplys);
replyRouter.get('/:id', getReply);
replyRouter.post('/', addReply);
replyRouter.put('/:id', updateReply);
replyRouter.delete('/:id', deleteReply);

export default replyRouter;
