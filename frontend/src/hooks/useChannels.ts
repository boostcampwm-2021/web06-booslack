import axios from 'axios';
import { useQuery } from 'react-query';

export const useChannelListQuery = (userId: string, workspaceId: string) => {
  return useQuery(
    ['channels', userId, workspaceId],
    async () => {
      const res = await axios.get(
        `/api/channels/channelsThatUserIn?userId=${userId}&workspaceId=${workspaceId}`,
      );
      return res.data.channels;
    },
    {
      enabled: !!workspaceId,
    },
  );
};

export const useChannelQuery = (id: string) => {
  return useQuery(['channel', id], async () => {
    const res = await axios.get(`/api/channels/${id}`);
    return res.data.channel;
  });
};
