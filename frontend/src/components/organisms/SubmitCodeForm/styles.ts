import { ChangeEvent } from 'react';
import styled from 'styled-components';
import Input from '@atoms/Input';

const Container = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  background: transparent;
`;

export const StyledInput = styled(Input)<{
  OnChange: ChangeEvent<HTMLFormElement>;
}>`
  display: flex;
  height: 92px;
  width: 92px;
  font-size: 50px;
  line-height: 56px;
  text-align: center;
  background: 0 0;
  border: none;
  box-shadow: none;
  text-transform: uppercase;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #000;
  border-radius: 4px;

  & > input:nth-child(2) {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default Container;
