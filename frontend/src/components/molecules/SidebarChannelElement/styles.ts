import styled from 'styled-components';
import { theme } from 'styled-tools';
import { defaultTheme } from '@global/theme';

interface Props {
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  min-width: 250px;
  &: hover {
    cursor: pointer;
    background-color: ${theme('focusedMenu', defaultTheme.focusedMenu)};
  }
`;

export const StyledLabel = styled.span<Props>`
  margin: 1rem;
`;
