import { useQuery } from 'react-query';
import axios from 'axios';
import API from '@global/api';
import { hourlyExpirationOption } from '@global/options';

export const useUserListWithChannelInfoQuery = (
  workspaceId: string,
  channelId: string,
) => {
  return useQuery(
    ['users', channelId],
    async () => {
      const res = await axios.get(
        `${API.get.users.workspaces}?workspaceId=${workspaceId}&channelId=${channelId}`,
      );
      return res.data.users;
    },
    hourlyExpirationOption,
  );
};

export const useUsersQuery = (workspaceId: string) => {
  return useQuery(
    ['users', 'all', workspaceId],
    async () => {
      const res = await axios.get(
        `${API.get.userHasWorkspaces}/all?workspaceId=${workspaceId}`,
      );
      return res.data.userHasWorkspaces;
    },
    hourlyExpirationOption,
  );
};
