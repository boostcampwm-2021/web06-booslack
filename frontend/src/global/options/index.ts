const SECOND = 1000;
const HOUR = 60 * 60;

export const socketOption = {
  staleTime: Infinity,
  refetchOnWindowFocus: false,
  suspense: true,
};

export const hourlyExpirationOption = {
  staleTime: SECOND * 10,
  cacheTime: SECOND * HOUR,
};
