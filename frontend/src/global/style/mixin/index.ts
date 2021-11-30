import { css } from 'styled-components';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/style/theme';

// eslint-disable-next-line import/prefer-default-export
export const RoundScrollBar = css`
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
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
  min-width: 60px;
  min-height: 30px;
  color: ${theme('titleText', defaultTheme.titleText)};
  background-color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
`;

export const ReverseThemeButton = css`
  min-width: 60px;
  min-height: 30px;
  color: ${theme('backgroundColor', defaultTheme.backgroundColor)};
  background-color: ${theme('titleText', defaultTheme.titleText)};
`;

export const bouncing = css`

box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
-webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
-moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
-ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
-o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-decoration: none;

&:hover{
  color: rgba(255, 255, 255, 0.85);
  box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
}
`;

export const scrollIfHover = css`
  overflow-x: hidden;
  overflow-y: hidden;
  &:hover {
    overflow-x: hidden;
    overflow-y: scroll;
    ${RoundScrollBar}
  }
`;
