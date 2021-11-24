import axios from 'axios';
import { Socket } from 'socket.io-client';
import { Channel } from '@global/type';
import API from '@global/api';
// refresh required
export const joinChannel = async (
  userId: number | string,
  channelId: number | string,
  workspaceId: string,
  socket: Socket,
): Promise<void> => {
  const res = await axios.post('/api/channels/userToChannel', {
    userId,
    channelId,
    workspaceId,
  });
  socket.emit('channels', workspaceId);
  return res.data;
};

export const leaveChannel = async (
  channelId: number | string,
  workspaceId: string,
  socket: Socket,
): Promise<void> => {
  await axios.delete(`${API.delete.user.channel}/${workspaceId}/${channelId}`);
  socket.emit('channels', workspaceId);
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

export const updateChannel = async (
  data: Channel,
  socket: Socket,
): Promise<any> => {
  const res = await axios.put(`/api/channels/${data.id}`, data);
  socket.emit('channel', data.id);
  return res.data;
};
