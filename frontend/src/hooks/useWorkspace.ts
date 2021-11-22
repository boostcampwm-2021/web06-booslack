import axios from 'axios';
import { useQuery } from 'react-query';

export const useWorkspaceQuery = (workspaceId: string) => {
  return useQuery(
    ['workspace', workspaceId],
    async () => {
      const res = await axios.get(`/api/workspaces/${workspaceId}`);
      return res.data.workspace;
    },
    {
      enabled: !!workspaceId,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  );
};
