export const queryFlatMap = <T>(
  data: { pages: unknown[] },
  key: string,
): T[] => {
  return data?.pages?.map((element) => element[key]).flat();
};
