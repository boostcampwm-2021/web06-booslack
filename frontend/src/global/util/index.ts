import React from 'react';
import axios from 'axios';
import { METHOD } from '@global/type';

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

export const selectRefValue = (
  ref: React.RefObject<HTMLInputElement>,
): undefined | string | undefined => {
  return ref?.current?.value;
};

export const axiosWithFile = async (
  path: string,
  json: unknown,
  files: File[],
  method: METHOD = 'GET',
): Promise<unknown | null> => {
  const formData = new FormData();
  files?.map((file: File) => file && formData.append('images', file));

  formData.append(
    'key',
    new Blob([JSON.stringify(json)], { type: 'application/json' }),
  );

  try {
    return await axios({
      method,
      url: path,
      data: formData,
    });
  } catch (error) {
    return null;
  }
};
