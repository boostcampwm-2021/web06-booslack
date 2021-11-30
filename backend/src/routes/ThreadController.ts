import { Router } from 'express';
import {
  addThread,
  deleteThread,
  getPartialThreadsByChannelId,
  getThread,
  updateThread,
  updateThreadAndFiles,
} from '../service/ThreadService';

const threadRouter = Router();

threadRouter.put('/files/:id', updateThreadAndFiles);

threadRouter.get('/', getPartialThreadsByChannelId);
threadRouter.get('/:id', getThread);
threadRouter.post('/', addThread);
threadRouter.put('/:id', updateThread);
threadRouter.delete('/:id', deleteThread);

export default threadRouter;
