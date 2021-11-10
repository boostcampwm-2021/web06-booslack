import React from 'react';

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

export const submitInput = (
  e: React.FormEvent<Element>,
): undefined | string => {
  e.preventDefault();

  const target = e.target as HTMLFormElement;
  const { value } = target.firstChild as HTMLInputElement;

  return value;
};

export const changeFile = (e: React.FormEvent<Element>): undefined | File => {
  e.preventDefault();

  const target = e.target as HTMLInputElement;
  const { files } = target;

  return files[0];
};
