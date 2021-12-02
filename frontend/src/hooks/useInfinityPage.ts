import { useInfiniteQuery, QueryFunction } from 'react-query';

interface Icursor {
  nextCursor: number;
  prevCursor: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useInfinityScroll = <T>(
  key: string,
  axiosFunction: QueryFunction<T & Icursor, string>,
) => {
  return useInfiniteQuery(`infinity${key}`, axiosFunction, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
    suspense: true,
  });
};

export default useInfinityScroll;
