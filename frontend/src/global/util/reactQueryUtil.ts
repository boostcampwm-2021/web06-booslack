import { flatMap } from 'lodash';

export const queryFlatMap = <T>(
  data: { pages: unknown[] },
  key: string,
): T[] => {
  return flatMap(data?.pages, (element) => element[key]);
};
