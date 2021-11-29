import { Router } from 'express';
import {
  getAllChannels,
  getOneChannel,
  addOneChannel,
  updateOneChannel,
  deleteOneChannel,
  addUserToChannel,
  deleteUserFromChannel,
  getChannelsThatUserIn,
  getChannels,
} from '../service/ChannelService';

const channelRouter = Router();

channelRouter.post('/userToChannel', addUserToChannel);
channelRouter.delete('/userFromChannel', deleteUserFromChannel);
channelRouter.get('/channelsThatUserIn', getChannelsThatUserIn);

channelRouter.get('/all', getChannels);
channelRouter.get('/', getAllChannels);
channelRouter.get('/:id', getOneChannel);
channelRouter.post('/', addOneChannel);
channelRouter.put('/:id', updateOneChannel);
channelRouter.delete('/:id', deleteOneChannel);

export default channelRouter;
