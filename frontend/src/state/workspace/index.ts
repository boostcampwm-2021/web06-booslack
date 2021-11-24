import { atom, selector } from 'recoil';

const PAGEVW = 100;
const SIDEBARSIZE = 18;

export const mainWorkspaceModalState = atom({
  key: 'mainWorkspaceSizeState',
  default: 82,
});

export const replyWorkspaceModalState = selector({
  key: 'replyWorkspaceSizeState',
  get: ({ get }) => {
    const size = PAGEVW - get(mainWorkspaceModalState) - SIDEBARSIZE;
    return size;
  },
});
