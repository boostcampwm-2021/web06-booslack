import { useEffect, useState } from 'react';
import { QueryFunction, useQuery, useQueryClient } from 'react-query';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const usePagenation = (
  key: string,
  axiosFunction: (page: number) => Promise<any>,
) => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(0);

  const { isLoading, data, error, isFetching, isPreviousData } = useQuery(
    [key, page],
    () => axiosFunction(page),
    { keepPreviousData: true, staleTime: 5000 },
  );

  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', page + 1], () => {
        axiosFunction(page + 1);
      });
    }
  }, [data, page, queryClient]);

  return { page, isLoading, data, error, isFetching, isPreviousData };
};

export default usePagenation;
