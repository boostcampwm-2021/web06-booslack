import { atom } from 'recoil';

export const selectedWorkspaceState = atom<string>({
  key: 'selectedWorkspace',
  default: '',
});
