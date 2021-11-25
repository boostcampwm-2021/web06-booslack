import { atom } from 'recoil';
import { defaultTheme, Itheme } from '@global/theme';

export const themeState = atom<Itheme>({
  key: 'themeState',
  default: defaultTheme,
});

export default themeState;
