/* eslint-disable no-tabs */
import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ImageBox from '@atoms/ImageBox';
import Label from '@atoms/Label';
import { bouncing, flexAlignCenter } from '@global/mixin';

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

export const StyledImageBox = styled(ImageBox)`
  width: 100vw;
  height: 100vh;
`;

export const StyledLabel = styled(Label)`
  font-size: 120px;
  color: #3881e7;
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
