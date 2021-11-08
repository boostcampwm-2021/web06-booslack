import { Router } from 'express';
import {
  getAllChannels,
  getOneChannel,
  addOneChannel,
  updateOneChannel,
  deleteOneChannel,
} from '../service/ChannelService';

const channelRouter = Router();

channelRouter.get('/all', getAllChannels);
channelRouter.get('/one/:id', getOneChannel);
channelRouter.post('/add', addOneChannel);
channelRouter.put('/update/:id', updateOneChannel);
channelRouter.delete('/delete/:id', deleteOneChannel);

export default channelRouter;
