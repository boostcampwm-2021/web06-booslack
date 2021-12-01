import axios from 'axios';
import { Socket } from 'socket.io-client';
import API from '@global/api';

export const deleteReaction = async (
  reactionId: number,
  channelId: number,
  threadId: number,
  socket: Socket,
): Promise<void> => {
  const res = await axios.delete(
    `${API.delete.reaction.deleteOne}/${reactionId}`,
  );

  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};

export const postReaction = async (
  userHasWorkspaceId: number,
  channelId: number,
  emoji: string,
  threadId: number,
  socket: Socket,
): Promise<void> => {
  const res = await axios.post(API.post.reaction.postOne, {
    userHasWorkspaceId,
    emoji,
    threadId,
  });

  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};

export const deleteReplyReaction = async (
  reactionId: number,
  channelId: number,
  threadId: number,
  replyId: number,
  socket: Socket,
): Promise<void> => {
  const res = await axios.delete(API.delete.reaction.reply, {
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
  userHasWorkspaceId: number,
  channelId: number,
  emoji: string,
  replyId: number,
  threadId: number,
  socket: Socket,
): Promise<void> => {
  const res = await axios.post(API.post.reaction.postOne, {
    userHasWorkspaceId,
    emoji,
    replyId,
  });

  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};
