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
} from '../service/ChannelService';

const channelRouter = Router();

channelRouter.get('/', getAllChannels);
channelRouter.get('/:id', getOneChannel);
channelRouter.post('/', addOneChannel);
channelRouter.put('/:id', updateOneChannel);
channelRouter.delete('/:id', deleteOneChannel);
channelRouter.post('/userToChannel', addUserToChannel);
channelRouter.delete('/userFromChannel', deleteUserFromChannel);
channelRouter.get('/channelsThatUserIn', getChannelsThatUserIn);

export default channelRouter;
