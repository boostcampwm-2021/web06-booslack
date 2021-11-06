export const sortedAlphabetList = (data, key) => {
  data?.sort((a, b) => {
    return a[key].localeCompare(b[key]);
  });

  return data;
};
