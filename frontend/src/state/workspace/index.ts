import { atom, selector } from 'recoil';

const PAGEVW = 100;
const SIDEBARSIZE = 18;
const CONTENTSIZE = 82;

export const sizestate = atom<number>({
  key: 'sizeState',
  default: CONTENTSIZE,
});

export const replyToggleState = atom<boolean>({
  key: 'replyToggleState',
  default: false,
});

export const mainWorkspaceSizeState = selector<number>({
  key: 'mainWorkspaceSizeState',
  get: ({ get }) => {
    const isOpened = get(replyToggleState);
    const size = get(sizestate);

    if (isOpened) return 62;
    return size;
  },
});

export const replyWorkspaceState = selector<number>({
  key: 'replyWorkspaceSizeState',
  get: ({ get }) => {
    const isOpened = get(replyToggleState);

    if (!isOpened) return 0;

    const size = PAGEVW - get(mainWorkspaceSizeState) - SIDEBARSIZE;
    return size;
  },
});
