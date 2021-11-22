import { Channel } from '@global/type';
import axios from 'axios';

// refresh required
export const joinChannel = (
  userId: number | string,
  channelId: number | string,
  workspaceId: string,
): void => {
  axios.post('/api/channels/userToChannel', {
    userId,
    channelId,
    workspaceId,
  });
};

export const createChanel = async (
  name: string,
  isPrivate: boolean,
  description: string,
  workspaceId: string,
  socket,
): Promise<any> => {
  const res = await axios.post('/api/channels', {
    name,
    private: isPrivate,
    description,
    workspaceId,
  });
  socket.emit('channels', workspaceId);
  return res.data;
};

export const updateChannel = async (data: Channel, socket): Promise<any> => {
  const res = await axios.put(`/api/channels/${data.id}`, data);
  socket.emit('channel', data.id);
  return res.data;
};
