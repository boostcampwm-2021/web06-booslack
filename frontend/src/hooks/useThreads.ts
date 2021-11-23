import axios from 'axios';
import { useQuery } from 'react-query';

export const useThreadListQuery = (channelId: string) => {
  return useQuery(['threads', channelId], async () => {
    const res = await axios.get(`/api/threads?channelId=${channelId}`);
    return res.data.threads;
  });
};
