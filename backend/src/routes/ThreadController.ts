import { Router } from 'express';
import { addThread, deleteThread, getAllThreadsByChannelId, getThread, updateThread } from '../service/ThreadService';

const threadRouter = Router();

threadRouter.get('/', getAllThreadsByChannelId);
threadRouter.get('/:id', getThread);
threadRouter.post('/', addThread);
threadRouter.put('/:id', updateThread);
threadRouter.delete('/:id', deleteThread);

export default threadRouter;
