import { useInfiniteQuery, QueryFunction } from 'react-query';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useInfinityScroll = (
  key: string,
  axiosFunction: QueryFunction<any, string>,
) => {
  return useInfiniteQuery(key, axiosFunction, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
  });
};

export default useInfinityScroll;
