import { useEffect } from 'react';

export const initializeSocket = (socket, queryClient) => {
  useEffect(() => {
    if (!socket) return;

    socket.on('threads', (_channelId) => {
      queryClient.invalidateQueries(['threads', _channelId], {
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
