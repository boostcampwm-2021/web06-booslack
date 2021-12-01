/* eslint-disable no-tabs */
import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import Label from '@atoms/Label';
import { bouncing } from '@global/mixin';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
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

  ${bouncing}
`;

export const Dropzone = styled.div`
  width: 400px;
  height: 240px;
  border: 1px solid #868686;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
`;

export const FileNameContainer = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
`;
