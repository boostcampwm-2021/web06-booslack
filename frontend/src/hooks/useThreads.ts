import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { useAbstractQuery } from '@hook/useAbstract';
import API from '@global/api';
import { socketOption } from '@global/options';

const MAX_THREADS = 1000000000;

export const useThreadQuery = (threadId: string) => {
  return useAbstractQuery('thread', threadId);
};

export const usePartialThreadListQuery = (channelId: string) => {
  return useInfiniteQuery(
    ['threads', channelId],
    async ({ pageParam = MAX_THREADS }) => {
      const res = await axios.get(
        `${API.get.threads}?channelId=${channelId}&cursor=${pageParam}`,
      );
      return res.data.threads;
    },
    {
      ...socketOption,
      getPreviousPageParam: (firstPage) => firstPage[0]?.id ?? false,
    },
  );
};
