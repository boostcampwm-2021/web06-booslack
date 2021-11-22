import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (workspaceId) => {
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io(`/workspace:${workspaceId}`);
    socketRef.current = socket;

    socket.on('chat', (data) => {
      console.log('received chat: ', data);
    });
  }, [workspaceId]);

  return [socketRef.current];
};
