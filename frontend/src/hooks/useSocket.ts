import { io } from 'socket.io-client';

export const initializeSocket = (workspaceId) => {
  const socket = io(`/workspace:${workspaceId}`);

  socket.on('chat', (data) => {
    console.log('received chat:', data);
  });

  return socket;
};
