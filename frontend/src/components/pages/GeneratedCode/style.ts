/* eslint-disable no-tabs */
import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import Label from '@atoms/Label';
import { bouncing } from '@global/style/mixin';

export const Container = styled.div``;

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

  ${bouncing}
`;
