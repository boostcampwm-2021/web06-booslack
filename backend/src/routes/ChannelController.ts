import { Router } from 'express';
import {
  getAllChannels,
  getOneChannel,
  addOneChannel,
  updateOneChannel,
  deleteOneChannel,
} from '../service/ChannelService';

const channelRouter = Router();

channelRouter.get('/', getAllChannels);
channelRouter.get('/:id', getOneChannel);
channelRouter.post('/', addOneChannel);
channelRouter.put('/:id', updateOneChannel);
channelRouter.delete('/:id', deleteOneChannel);

export default channelRouter;
