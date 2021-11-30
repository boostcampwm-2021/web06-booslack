import { useQuery } from 'react-query';
import axios from 'axios';
import API from '@global/api';
import { socketOption } from '@global/options';

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
      ...socketOption,
      enabled: !!workspaceId,
    },
  );
};

export const useChannelQuery = (id: string) => {
  return useQuery(
    ['channel', id],
    async () => {
      const res = await axios.get(`${API.get.channel.base}/${id}`);
      return res.data.channel;
    },
    socketOption,
  );
};

// literally all channels workspace
export const useChannelsQuery = (workspaceId: string) => {
  return useQuery(
    ['channels', 'all', workspaceId],
    async () => {
      const res = await axios.get(
        `${API.get.channel.base}/all?workspaceId=${workspaceId}`,
      );
      return res.data.channels;
    },
    socketOption,
  );
};
