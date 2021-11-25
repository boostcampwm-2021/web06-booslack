import { Router } from 'express';
import { addReaction, deleteReactionById, deleteReactionByInfo } from '../service/ReactionService';

const channelRouter = Router();

channelRouter.post('/', addReaction);
channelRouter.delete('/:id', deleteReactionById);
channelRouter.delete('/', deleteReactionByInfo);

export default channelRouter;
