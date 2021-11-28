import axios from 'axios';
import { useQuery } from 'react-query';

export const CACHETIME = 10000;

export const useAbstractQuery = (
  name: string,
  id: string,
  path: undefined | string = undefined,
) => {
  const realPath = path || `${name}s`;
  return useQuery(
    [name, id],
    async () => {
      const res = await axios.get(`/api/${realPath}/${id}`);
      return res?.data[name];
    },
    {
      keepPreviousData: true,
      cacheTime: CACHETIME,
      staleTime: CACHETIME,
      refetchOnWindowFocus: false,
    },
  );
};

export const useAbstractQueryList = (
  name: string,
  id: string,
  params: any,
  path: undefined | string = undefined,
) => {
  const realPath = path || `${name}`;

  return useQuery(
    [name, id],
    async () => {
      const res = await axios.get(`/api/${realPath}`, {
        params: { ...params },
      });
      return res?.data[name];
    },
    {
      keepPreviousData: true,
      cacheTime: CACHETIME,
      staleTime: CACHETIME,
      refetchOnWindowFocus: false,
    },
  );
};
