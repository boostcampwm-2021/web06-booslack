import { atom } from 'recoil';

export const channelCreateModalState = atom({
  key: 'createChannel',
  default: false,
});

export const sidebarChannelInfoModalState = atom({
  key: 'sidebarChannelModal',
  default: false,
});
