import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: undefined,
});

export default userState;
