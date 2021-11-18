import axios from 'axios';

// refresh required
export const joinChannel = (
  e: MouseEvent,
  userId: string,
  channelId: string,
  workspaceId: string,
): void => {
  e.stopPropagation();
  axios.post('/api/channels/userToChannel', {
    userId,
    channelId,
    workspaceId,
  });
};
