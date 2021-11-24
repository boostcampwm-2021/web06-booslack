import React from 'react';
import { AxiosResponse } from 'axios';

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

export const checkInputValues = (inputTag: HTMLInputElement): string => {
  const inputValue: string | undefined = inputTag?.value;

  // eslint-disable-next-line no-param-reassign
  if (inputValue) inputTag.value = inputValue[inputValue.length - 1];
  if (!/[a-zA-Z0-9]/.exec(inputTag.value)) {
    // eslint-disable-next-line no-param-reassign
    inputTag.value = '';
  }
  return inputTag.value.toUpperCase() as string;
};

export const copyText = (text: string): void => {
  navigator.clipboard.writeText(text);
};

export const getCode = async (
  axiosRequest: () => Promise<AxiosResponse>,
  setModal: (context: { status: boolean; text: undefined }) => void,
): Promise<string> => {
  try {
    const { data } = await axiosRequest();
    if (!data?.code) throw new Error('no data');
    return data.code;
  } catch (error) {
    setModal({ status: true, text: undefined });
    return null;
  }
};
