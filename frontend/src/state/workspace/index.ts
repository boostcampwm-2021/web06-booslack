import { IThread } from '@global/type';
import { atom, selector } from 'recoil';

const PAGEVW = 100;
const OPENSIZE = 82;
const SIDEBARSIZE = 18;
const CLOSEDSIZE = 61;

export const sizestate = atom<number>({
  key: 'sizeState',
  default: OPENSIZE,
});

export interface IreplyToggle {
  isOpened: boolean;
  thread: undefined | IThread;
  channelName: undefined | string[];
}

export const replyToggleState = atom<IreplyToggle>({
  key: 'replyToggleState',
  default: {
    isOpened: false,
    thread: undefined,
    channelName: undefined,
  },
});

export const mainWorkspaceSizeState = selector<number>({
  key: 'mainWorkspaceSizeState',
  get: ({ get }) => {
    const { isOpened } = get(replyToggleState);
    const OPENEDSIZE = get(sizestate);

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
