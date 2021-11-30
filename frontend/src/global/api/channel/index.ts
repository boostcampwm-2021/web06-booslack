import axios from 'axios';
import { Socket } from 'socket.io-client';
import { Channel } from '@global/type';
import API from '@global/api';

export const joinChannel = async (
  userId: number | string,
  channelId: number | string,
  workspaceId: string,
  socket: Socket,
): Promise<void> => {
  const res = await axios.post(API.post.channel.userToChannel, {
    userId,
    channelId,
    workspaceId,
  });

  if (res.status === 200) {
    socket.emit('channels', workspaceId);
  }
};

export const leaveChannel = async (
  channelId: number | string,
  workspaceId: string,
  socket: Socket,
): Promise<void> => {
  const res = await axios.delete(
    `${API.delete.user.channel}/${workspaceId}/${channelId}`,
  );

  if (res.status === 200) {
    socket.emit('channels', workspaceId);
  }
};

export const createChanel = async (
  name: string,
  isPrivate: boolean,
  description: string,
  workspaceId: string,
  socket: Socket,
): Promise<void> => {
  const res = await axios.post(API.post.channel.addOne, {
    name,
    private: isPrivate,
    description,
    workspaceId,
  });

  if (res.status === 200) {
    socket.emit('channels', workspaceId);
  }
};

export const updateChannel = async (
  data: Channel,
  socket: Socket,
): Promise<void> => {
  const res = await axios.put(`${API.put.channel}/${data.id}`, data);

  if (res.status === 200) {
    socket.emit('channel', data.id);
  }
};
