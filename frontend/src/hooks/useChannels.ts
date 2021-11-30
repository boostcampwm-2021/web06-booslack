import { useQuery } from 'react-query';
import axios from 'axios';
import API from '@global/api';

export const useChannelListQuery = (userId: string, workspaceId: string) => {
  return useQuery(
    ['channels', workspaceId, userId],
    async () => {
      const res = await axios.get(
        `${API.get.channel.userChannels}?userId=${userId}&workspaceId=${workspaceId}`,
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
    const res = await axios.get(`${API.get.channel.base}/${id}`);
    return res.data.channel;
  });
};

// literally all channels workspace
export const useChannelsQuery = (workspaceId: string) => {
  return useQuery(['channels', 'all', workspaceId], async () => {
    const res = await axios.get(
      `${API.get.channel.base}/all?workspaceId=${workspaceId}`,
    );
    return res.data.channels;
  });
};
