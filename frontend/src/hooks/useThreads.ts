import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';

const CACHETIME = 10000;

export const useThreadListQuery = (channelId: string) => {
  return useQuery(['threads', channelId], async () => {
    const res = await axios.get(`/api/threads?channelId=${channelId}`);
    return res.data.threads;
  });
};

export const useThreadQuery = (threadId: string) => {
  return useQuery(
    ['thread', threadId],
    async () => {
      const res = await axios.get(`/api/threads/${threadId}`);
      return res.data?.thread;
    },
    {
      keepPreviousData: true,
      cacheTime: CACHETIME,
      staleTime: CACHETIME,
      refetchOnWindowFocus: false,
    },
  );
};

export const usePartialThreadListQuery = (channelId: string) => {
  return useInfiniteQuery(
    ['threads', channelId],
    async ({ pageParam = 100000 }) => {
      const res = await axios.get(
        `/api/threads?channelId=${channelId}&cursor=${pageParam}`,
      );
      return res.data.threads;
    },
    {
      getPreviousPageParam: (firstPage) => firstPage[0]?.id ?? false,
    },
  );
};
