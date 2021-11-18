import styled from 'styled-components';
import { theme } from 'styled-tools';
import Input from '@atoms/Input';
import { defaultTheme } from '@global/theme';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 58px;
  min-height: 58px;

  padding: 1vh 20px 1vh 20px;

  background-color: ${theme('bigHeaderColor', defaultTheme.bigHeaderColor)};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  border-bottom: 50px soild #fff;
`;

export const StyledInput = styled(Input)`
  width: 30vw;
  min-width: 300px;
  height: 50px;
`;

export default Container;
