import styled from 'styled-components';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/style/theme';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  width: 100%;

  color: ${theme('smallText', defaultTheme.smallText)};
  &: hover {
    cursor: pointer;
    background-color: ${theme('focusedMenu', defaultTheme.focusedMenu)};
  }
`;

export const StyledLabel = styled.span<Props>`
  margin: 1rem;
`;
