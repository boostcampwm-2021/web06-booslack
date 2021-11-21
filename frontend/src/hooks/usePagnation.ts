import { AxiosResponse } from 'axios';
import { SetStateAction, Dispatch, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

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
const usePagnation = (
  key: (number | string)[],
  axiosFunction: <T, D>(page: number) => Promise<AxiosResponse<T, D>>,
  option: typeof Object | undefined = null,
): IusePagenation => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(0);

  const { isLoading, data, error, isFetching, isPreviousData } = useQuery(
    [...key, page],
    () => axiosFunction(page),
    { keepPreviousData: true, staleTime: 5000, ...option },
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (data?.hasMore) {
      queryClient.prefetchQuery([...key, page + 1], () => {
        axiosFunction(page + 1);
      });
    }
  }, [page, queryClient]);

  return {
    page,
    setPage,
    isLoading,
    data: data?.data,
    error,
    isFetching,
    isPreviousData,
  };
};

export default usePagnation;
