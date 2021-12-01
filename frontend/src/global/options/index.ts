export const socketOption = {
  staleTime: Infinity,
  refetchOnWindowFocus: false,
};

export const hourlyExpirationOption = {
  staleTime: 1000 * 60 * 60,
  cacheTime: 1000 * 60 * 60,
};
