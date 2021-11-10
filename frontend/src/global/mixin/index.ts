import { css } from 'styled-components';

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
