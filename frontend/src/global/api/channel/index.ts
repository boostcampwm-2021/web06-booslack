import axios from 'axios';

// refresh required
export const joinChannel = (
  userId: string,
  channelId: string,
  workspaceId: string,
): void => {
  axios.post('/api/channels/userToChannel', {
    userId,
    channelId,
    workspaceId,
  });
};

export const createChanel = async (
  name: string,
  isPrivate: boolean,
  description: string,
  workspaceId: string,
): Promise<any> => {
  const res = await axios.post('/api/channels', {
    name,
    private: isPrivate,
    description,
    workspaceId,
  });
  return res.data;
};
