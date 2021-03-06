import { atom } from 'recoil';

export const channelCreateModalState = atom({
  key: 'createChannel',
  default: false,
});

export const channelInfoModalState = atom({
  key: 'channelInfo',
  default: {
    isOpen: false,
    isAboutTab: true,
  },
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

export const SortedOptionMordalState = atom({
  key: 'sortedOptionMordal',
  default: [true, true, true],
});

export const userProfileModalState = atom({
  key: 'userProfile',
  default: {
    isOpen: false,
    userHasWorkspace: null,
    x: null,
    y: null,
  },
});

export const searchModalState = atom({
  key: 'searchModal',
  default: false,
});
