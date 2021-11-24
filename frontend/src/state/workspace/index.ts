import { atom, selector } from 'recoil';

const PAGEVW = 100;
const SIDEBARSIZE = 18;
const OPENEDSIZE = 82;
const CONTENTSIZE = 62;

export const sizestate = atom<number>({
  key: 'sizeState',
  default: CONTENTSIZE,
});

export interface IreplyToggle {
  isOpened: boolean;
  threadId: undefined | number | string;
  channelName: undefined | string[];
}

export const replyToggleState = atom<IreplyToggle>({
  key: 'replyToggleState',
  default: {
    isOpened: false,
    threadId: undefined,
    channelName: undefined,
  },
});

export const mainWorkspaceSizeState = selector<number>({
  key: 'mainWorkspaceSizeState',
  get: ({ get }) => {
    const { isOpened } = get(replyToggleState);
    const CLOSEDSIZE = get(sizestate);

    if (isOpened) return CLOSEDSIZE;
    return OPENEDSIZE;
  },
});

export const replyWorkspaceState = selector<number>({
  key: 'replyWorkspaceSizeState',
  get: ({ get }) => {
    const { isOpened } = get(replyToggleState);

    if (!isOpened) return 0;

    const size = PAGEVW - get(mainWorkspaceSizeState) - SIDEBARSIZE;
    return size;
  },
});
