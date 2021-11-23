import { AxiosResponse } from 'axios';
import { SetStateAction, Dispatch, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useQuery, useQueryClient } from 'react-query';
import userState from '@state/user';

interface IusePagenation {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  data: any;
  error: unknown;
  isFetching: boolean;
  isPreviousData: boolean;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const usePagination = (
  key: (number | string | boolean)[],
  axiosFunction: <T, D>(page: number) => Promise<AxiosResponse<T, D>>,
  option = null,
): IusePagenation => {
  const queryClient = useQueryClient();
  const user = useRecoilValue(userState);
  const [page, setPage] = useState<number>(0);

  const queryKey = ['pagination', ...key, page];

  useEffect(() => {
    const { socket } = user;

    if (!socket) return;

    socket.on('channels', () => {
      queryClient.invalidateQueries(queryKey, { refetchActive: true });
    });
  }, [user, queryClient, page]);

  const { isLoading, data, error, isFetching, isPreviousData } = useQuery(
    queryKey,
    () => axiosFunction(page),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      ...option,
    },
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (data?.hasMore) {
      queryClient.prefetchQuery(['pagination', ...key, page + 1], () => {
        return axiosFunction(page + 1);
      });
    }
  }, [data, page, queryClient]);

  return {
    page,
    setPage,
    isLoading,
    data,
    error,
    isFetching,
    isPreviousData,
  };
};

export default usePagination;
