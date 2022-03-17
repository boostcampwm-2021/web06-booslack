import { Message } from '@global/type';
import { atom, selector } from 'recoil';

const PAGEVW = 100;
const WORKSPACE_SIZE = 82;
const SIDEBARSIZE = 18;
const CLOSEDSIZE = 21;

export const widthSizeState = atom<number>({
  key: 'widthSizeState',
  default: WORKSPACE_SIZE,
});

export interface IreplyToggle {
  isOpened: boolean;
  message: undefined | Message;
  channelName: undefined | string[];
}

export const replyToggleState = atom<IreplyToggle>({
  key: 'replyToggleState',
  default: {
    isOpened: false,
    message: undefined,
    channelName: undefined,
  },
});

export const mainWorkspaceSizeState = selector<number>({
  key: 'mainWorkspaceSizeState',
  get: ({ get }) => {
    const { isOpened } = get(replyToggleState);
    const OPENEDSIZE = get(widthSizeState);
    if (isOpened) return OPENEDSIZE - CLOSEDSIZE;
    return WORKSPACE_SIZE;
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
