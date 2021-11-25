import axios from 'axios';
import { useQuery } from 'react-query';

export const useThreadListQuery = (channelId: string) => {
  return useQuery(['threads', channelId], async () => {
    const res = await axios.get(`/api/threads?channelId=${channelId}`);
    return res.data.threads;
  });
};

export const useThreadQuery = (threadId: string) => {
  return useQuery(['thread', threadId], async () => {
    const res = await axios.get(`/api/threads/${threadId}`);
    return res.data?.thread;
  });
};
