import axios from 'axios';
import { useQuery } from 'react-query';

export const useUserListWithChannelInfoQuery = (
  workspaceId: string,
  channelId: string,
) => {
  return useQuery(['users', channelId], async () => {
    const res = await axios.get(
      `/api/users/workspaces?workspaceId=${workspaceId}&channelId=${channelId}`,
    );
    return res.data.users;
  });
};
