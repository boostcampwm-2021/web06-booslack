interface Option {
  reverse?: boolean | undefined;
}

export const sorted = (
  data: unknown[],
  key: string,
  json: Option = {
    reverse: false,
  },
): unknown[] => {
  if (json.reverse) {
    data?.sort((first, second) => {
      return second[key].localeCompare(first[key]);
    });
  } else {
    data?.sort((first, second) => {
      return first[key].localeCompare(second[key]);
    });
  }

  return data;
};

export default sorted;
