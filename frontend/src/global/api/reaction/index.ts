import axios from 'axios';

export const deleteReaction = async (
  reactionId: string,
  channelId: string,
  threadId: string,
  socket,
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
  socket,
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
