import { atom, selector } from 'recoil';

export const channelListState = atom({
  key: 'ChannelList',
  default: [],
});

export const browseChannelCursorState = atom({
  key: 'browseChannelCursor',
  default: '1',
});

export const browseChannelListState = atom({
  key: 'browseChannelList',
  default: [],
});

export const browseChannelLengthState = selector({
  key: 'browseChannelLength',
  get: ({ get }) => {
    const dataList = get(browseChannelListState);
    return dataList.length;
  },
  set: ({ set }, newValue) => set(browseChannelListState, newValue),
});
