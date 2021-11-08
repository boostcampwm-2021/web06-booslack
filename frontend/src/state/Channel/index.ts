import { pageLimitCount } from '@enum/index';
import { SortOption } from '@global/type';
import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';

export const channelListState = atom({
  key: 'ChannelList',
  default: [],
});

export const browseChannelSortOption = atom<SortOption>({
  key: 'browseChannelSortOption',
  default: 'alpha',
});

export const browseCursor = atom<number>({
  key: 'browseCursor',
  default: 1,
});

export const browseCursorValue = selector<number>({
  key: 'browseCursorValue',
  get: ({ get }) => (get(browseCursor) - 1) * pageLimitCount,
});

export const channelListFromServerState = selectorFamily({
  key: 'channelListFromServer',
  get: (data) => async () => {
    const response = await axios.get(
      `http://localhost:8081/api/channels/channelsThatUserIn?userId=${data.userId}&workspaceId=${data.workspaceId}`,
    );
    return response.data;
  },
});
