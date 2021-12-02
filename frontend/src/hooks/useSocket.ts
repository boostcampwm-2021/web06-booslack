import { useEffect } from 'react';
import { QueryClient } from 'react-query';
import { Socket } from 'socket.io-client';

export const initializeSocket = (socket: Socket, queryClient: QueryClient) => {
  useEffect(() => {
    if (!socket) return;

    socket.on('threads', (_channelId: string, _threadId: string) => {
      const channelId = String(_channelId);
      const threadId = String(_threadId);
      queryClient.invalidateQueries(['threads', channelId], {
        refetchActive: true,
      });

      queryClient.invalidateQueries(['thread', threadId], {
        refetchActive: true,
      });

      queryClient.invalidateQueries(['replys', threadId], {
        refetchActive: true,
      });
    });

    socket.on('channels', (_workspaceId) => {
      const workspaceId = String(_workspaceId);
      queryClient.invalidateQueries(['channels', workspaceId], {
        refetchActive: true,
      });

      queryClient.invalidateQueries(['channels', 'all', workspaceId], {
        refetchActive: true,
      });
    });

    socket.on('channel', (_channelId) => {
      const channelId = String(_channelId);
      queryClient.invalidateQueries(['channel', channelId], {
        refetchActive: true,
      });
    });

    // workspaceId가 변경되어 unmount될 시 소켓을 닫으면서 모든 리스너도 함께 삭제됨
  }, [socket, queryClient]);
};
