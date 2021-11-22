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

export const channelTopicModalState = atom({
  key: 'channelTopic',
  default: false,
});

export const LoginModalState = atom({
  key: 'Login',
  default: false,
});

export const preferenceModalState = atom({
  key: 'preferenceModal',
  default: false,
});

export const codeModalState = atom({
  key: 'codeModal',
  default: {
    status: false,
    text: undefined,
  },
});
