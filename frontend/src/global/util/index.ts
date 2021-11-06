interface Option {
  reverse: boolean | undefined;
}

export const sorted = (
  data: unknown[],
  key: string,
  json: Option = {
    reverse: false,
  },
): unknown[] => {
  data?.sort((first, second) => {
    return first[key].localeCompare(second[key]);
  });

  if (json.reverse) {
    data.reverse();
  }

  return data;
};

export default sorted;
