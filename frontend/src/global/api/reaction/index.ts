import axios from 'axios';
import { Socket } from 'socket.io-client';

export const deleteReaction = async (
  reactionId: string,
  channelId: string,
  threadId: string,
  socket: Socket,
): Promise<any> => {
  const res = await axios.delete(`/api/reactions/${reactionId}`);
  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};

export const postReaction = async (
  userHasWorkspaceId: string,
  channelId: string,
  emoji: string,
  threadId: string,
  socket: Socket,
): Promise<any> => {
  const res = await axios.post('/api/reactions', {
    userHasWorkspaceId,
    emoji,
    threadId,
  });
  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};

export const deleteReplyReaction = async (
  reactionId: string,
  channelId: string,
  threadId: string,
  replyId: string,
  socket: Socket,
): Promise<any> => {
  const res = await axios.delete('/api/reactions/reply', {
    params: {
      replyId,
      reactionId,
    },
  });
  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};

export const postReplyReaction = async (
  userHasWorkspaceId: string,
  channelId: string,
  emoji: string,
  replyId: string,
  threadId: string,
  socket: Socket,
): Promise<any> => {
  const res = await axios.post('/api/reactions/reply', {
    userHasWorkspaceId,
    emoji,
    replyId,
  });
  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};
