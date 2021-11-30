import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ImageBox from '@atoms/ImageBox';
import Label from '@atoms/Label';
import { bouncing, flexAlignCenter } from '@global/style/mixin';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  height: 100vh;
  width: 100vw;
  ${flexAlignCenter}
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

export const StyledButtonColumn = styled.div`
  position: absolute;
  bottom: 3vh;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  width: 22vw;
  min-width: 440px;
`;

export const StyledButton = styled(LabeledDefaultButton)`\
  width:10vw;
  min-width:200px;
  min-height:30px;

  background-color: #5c8dcf;
  ${bouncing}
`;
