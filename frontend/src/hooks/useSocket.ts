import { useEffect } from 'react';
import { QueryClient } from 'react-query';
import { Socket } from 'socket.io-client';

export const initializeSocket = (socket: Socket, queryClient: QueryClient) => {
  useEffect(() => {
    if (!socket) return;

    socket.on('threads', (_channelId, _threadId) => {
      queryClient.invalidateQueries(['threads', _channelId], {
        refetchActive: true,
      });

      queryClient.invalidateQueries(['thread', _threadId], {
        refetchActive: true,
      });

      queryClient.invalidateQueries(['replys', _threadId], {
        refetchActive: true,
      });
    });

    socket.on('channels', (_workspaceId) => {
      queryClient.invalidateQueries(['channels', _workspaceId], {
        refetchActive: true,
      });
    });

    socket.on('channel', (_channelId) => {
      queryClient.invalidateQueries(['channel', _channelId], {
        refetchActive: true,
      });
    });

    // workspaceId가 변경되어 unmount될 시 소켓을 닫으면서 모든 리스너도 함께 삭제됨
  }, [socket, queryClient]);
};
