import { css } from 'styled-components';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/theme';

// eslint-disable-next-line import/prefer-default-export
export const RoundScrollBar = css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

export const hoverChangeColor = css`
  &: hover {
    background-color: #ebeaeb;
    cursor: pointer;
  }
`;

export const flexAlignCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ThemeButton = css`
  color: ${theme('titleText', defaultTheme.titleText)};
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
`;
