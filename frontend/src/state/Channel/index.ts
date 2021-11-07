import { SortOption } from '@global/type';
import { atom, selector } from 'recoil';

export const channelListState = atom({
  key: 'ChannelList',
  default: [],
});

export const browseChannelSortOption = atom<SortOption>({
  key: 'browseChannelSortOption',
  default: 'alpha',
});
