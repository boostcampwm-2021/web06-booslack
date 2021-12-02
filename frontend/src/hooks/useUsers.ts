import { useQuery } from 'react-query';
import axios from 'axios';
import API from '@global/api';
import { hourlyExpirationOption } from '@global/options';

export const useUserListWithChannelInfoQuery = (
  _workspaceId: string,
  _channelId: string,
) => {
  const workspaceId = String(_workspaceId);
  const channelId = String(_channelId);
  return useQuery(
    ['users', channelId],
    async () => {
      const res = await axios.get(
        `${API.get.users.workspaces}?workspaceId=${workspaceId}&channelId=${channelId}`,
      );
      return res.data.users;
    },
    {
      ...hourlyExpirationOption,
      suspense: true,
    },
  );
};

export const useUsersQuery = (_workspaceId: string) => {
  const workspaceId = String(_workspaceId);
  return useQuery(
    ['users', 'all', workspaceId],
    async () => {
      const res = await axios.get(
        `${API.get.userHasWorkspaces}/all?workspaceId=${workspaceId}`,
      );
      return res.data.userHasWorkspaces;
    },
    {
      ...hourlyExpirationOption,
      suspense: true,
    },
  );
};
