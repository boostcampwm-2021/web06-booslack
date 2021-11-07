import { atom } from 'recoil';

export const channelCreateModalState = atom({
  key: 'createChannel',
  default: false,
});

export const sidebarChannelInfoModalState = atom({
  key: 'sidebarChannelModal',
  default: false,
});

export const channelInfoModalState = atom({
  key: 'channelInfo',
  default: false,
});
