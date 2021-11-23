import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

export const updateMessage = async (
  threadId: string,
  channelId: string,
  message: string,
  socket,
  setUpdateState: Dispatch<SetStateAction<boolean>>,
): Promise<any> => {
  const res = await axios.put(`/api/threads/${threadId}`, {
    message,
  });
  if (res.status === 200) {
    setUpdateState(false);
    socket.emit('threads', channelId);
  }
};

export const deleteMessage = async (
  threadId: string,
  channelId: string,
  socket,
): Promise<any> => {
  const res = await axios.delete(`/api/threads/${threadId}`);
  if (res.status === 200) {
    socket.emit('threads', channelId);
  }
};

export const postMessage = async (
  userHasWorkspaceId: string,
  channelId: string,
  message: string,
  socket,
  setMessageClear: Dispatch<SetStateAction<boolean>>,
): Promise<any> => {
  const res = await axios.post('/api/threads', {
    userHasWorkspaceId,
    message,
    channelId,
  });
  if (res.status === 200) {
    setMessageClear(true);
    socket.emit('threads', channelId);
  }
};
