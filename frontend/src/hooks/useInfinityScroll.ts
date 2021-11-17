import { useInfiniteQuery, QueryFunction } from 'react-query';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useInfinityScroll = (
  key: string,
  axiosFunction: QueryFunction<any, string>,
) => {
  const {
    status,
    isLoading,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(key, axiosFunction, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
  });

  return {
    status,
    isLoading,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  };
};

export default useInfinityScroll;
