import { SetStateAction, Dispatch, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

interface IusePagenation {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  data: { hasMore: boolean };
  error: unknown;
  isFetching: boolean;
  isPreviousData: boolean;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const usePagenation = (
  key: string,
  axiosFunction: (page: number) => Promise<unknown & { hasMore: boolean }>,
  option?: typeof Object,
): IusePagenation => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(0);

  const { isLoading, data, error, isFetching, isPreviousData } = useQuery(
    [key, page],
    () => axiosFunction(page),
    { keepPreviousData: true, staleTime: 5000, ...option },
  );

  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', page + 1], () => {
        axiosFunction(page + 1);
      });
    }
  }, [page, queryClient]);

  return { page, setPage, isLoading, data, error, isFetching, isPreviousData };
};

export default usePagenation;
