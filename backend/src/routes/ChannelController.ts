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

channelRouter.get('/all', getAllChannels);
channelRouter.get('/one/:id', getOneChannel);
channelRouter.post('/add', addOneChannel);
channelRouter.put('/update/:id', updateOneChannel);
channelRouter.delete('/delete/:id', deleteOneChannel);
channelRouter.post('/addUserToChannel', addUserToChannel);
channelRouter.post('/deleteUserFromChannel', deleteUserFromChannel);
channelRouter.get('/getChannelsThatUserIn', getChannelsThatUserIn);

export default channelRouter;
