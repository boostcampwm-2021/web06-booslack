import { Router } from 'express';
import {
  addReaction,
  addReplyReaction,
  deleteReactionById,
  deleteReactionByInfo,
} from '../service/ReactionService';

const channelRouter = Router();

channelRouter.post('/', addReaction);
channelRouter.post('/reply', addReplyReaction);
channelRouter.delete('/:id', deleteReactionById);
channelRouter.delete('/', deleteReactionByInfo);

export default channelRouter;
