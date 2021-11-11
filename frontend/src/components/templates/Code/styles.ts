/* eslint-disable no-tabs */
import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import Label from '@atoms/Label';
import { ThemeButton, bouncing } from '@global/mixin';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  height: 100vh;
  width: 100vw;
  align-items: center;
  & > * {
    margin-bottom: 5vh;
  }
`;

export const StyledLabel = styled(Label)`
  margin-top: 5vh;
  font-size: 55px;
`;

export const StyledButton = styled(LabeledDefaultButton)`
  height: 5vh;
  width: 10vw;
  min-width: 200px;
  min-height: 30px;
  margin-top: 20vh;

  ${ThemeButton}
  ${bouncing}
`;
