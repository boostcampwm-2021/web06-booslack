import { atom } from 'recoil';

export const channelCreateModalState = atom({
  key: 'createChannel',
  default: false,
});

export const sidebarChannelInfoModalState = atom({
  key: 'sidebarChannelModal',
  default: { status: false, channelId: -1 },
});

export const channelInfoModalState = atom({
  key: 'channelInfo',
  default: false,
});

export const channelDescriptionModalState = atom({
  key: 'channelDescription',
  default: false,
});

export const LoginModalState = atom({
  key: 'Login',
  default: false,
});
