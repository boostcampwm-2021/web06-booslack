import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useAbstractQuery } from '@hook/useAbstract';
import API from '@global/api';

export const useThreadListQuery = (channelId: string) => {
  return useQuery(['threads', channelId], async () => {
    const res = await axios.get(`${API.get.threads}?channelId=${channelId}`);
    return res.data.threads;
  });
};

export const useThreadQuery = (threadId: string) => {
  return useAbstractQuery('thread', threadId);
};

export const usePartialThreadListQuery = (channelId: string) => {
  return useInfiniteQuery(
    ['threads', channelId],
    async ({ pageParam = 100000 }) => {
      const res = await axios.get(
        `${API.get.threads}?channelId=${channelId}&cursor=${pageParam}`,
      );
      return res.data.threads;
    },
    {
      getPreviousPageParam: (firstPage) => firstPage[0]?.id ?? false,
    },
  );
};
