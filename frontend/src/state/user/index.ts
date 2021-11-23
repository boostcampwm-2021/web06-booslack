import { atom } from 'recoil';
import { Socket } from 'socket.io-client';
import { Itheme } from '@global/theme';

type ZeroOrOne = 1 | 2;

interface Props {
  account: string;
  createdAt: Date;
  description: string;
  email: string;
  id: number;
  local: ZeroOrOne;
  nickname: string;
  password: string;
  socket: Socket;
  theme: Itheme;
  userHasWorkspaceId: number;
}

const userState = atom<Props | undefined>({
  key: 'userState',
  default: undefined,
  dangerouslyAllowMutability: true,
});

export default userState;
