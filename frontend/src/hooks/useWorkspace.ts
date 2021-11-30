import { useQuery } from 'react-query';
import axios from 'axios';
import API from '@global/api';

export const useWorkspaceQuery = (workspaceId: string) => {
  return useQuery(
    ['workspace', workspaceId],
    async () => {
      const res = await axios.get(`${API.get.workspace.base}/${workspaceId}`);
      return res.data.workspace;
    },
    {
      enabled: !!workspaceId,
    },
  );
};
