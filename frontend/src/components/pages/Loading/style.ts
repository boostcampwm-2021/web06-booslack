/* eslint-disable no-tabs */
import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import Label from '@atoms/Label';
import { bouncing, flexAlignCenter } from '@global/mixin';
import { DotLoader } from 'react-spinners';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  height: 100vh;
  width: 100vw;
  ${flexAlignCenter}
  align-items: center;
  & > * {
    margin-bottom: 5vh;
  }
`;

export const StyledLabel = styled(Label)`
  padding-top: 30px;
  font-size: 22px;
`;

export const StyledButton = styled(LabeledDefaultButton)`
  position: absolute;
  bottom: 3vh;
  height: 5vh;
  width: 10vw;
  min-width: 200px;
  min-height: 30px;

  background-color: #5c8dcf;
  ${bouncing}
`;

export const LoadingLoader = styled(DotLoader)``;
