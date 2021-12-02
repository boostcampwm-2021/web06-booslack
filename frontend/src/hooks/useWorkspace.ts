import { useQuery } from 'react-query';
import axios from 'axios';
import API from '@global/api';
import { hourlyExpirationOption } from '@global/options';

export const useWorkspaceQuery = (_workspaceId: string) => {
  const workspaceId = String(_workspaceId);
  return useQuery(
    ['workspace', workspaceId],
    async () => {
      const res = await axios.get(`${API.get.workspace.base}/${workspaceId}`);
      return res.data.workspace;
    },
    {
      ...hourlyExpirationOption,
      enabled: !!workspaceId,
    },
  );
};
