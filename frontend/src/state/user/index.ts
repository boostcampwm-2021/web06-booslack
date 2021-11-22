import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: undefined,
  dangerouslyAllowMutability: true,
});

export default userState;
