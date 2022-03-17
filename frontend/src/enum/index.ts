/* eslint-disable @typescript-eslint/naming-convention */
export const PAGE_LIMIT_COUNT = 10;

export const STATUSCODES = {
  BADREQUEST: 400,
  CONFLICT: 409,
};

export enum BUTTON_SIZE {
  width = 81.92,
  height = 30,
  color = 'black',
  backgroundColor = 'white',
}

export enum BROWSER_CHANNEL_LIST_SIZE {
  width = 75,
  height = 5,
}
export const CHANNELTYPE = {
  1: '🔒',
  0: '#',
} as const;

export const PREFERENCE_MODAL_STATUS = { ABOUT: 1, THEME: 2, OUT: 3 };
