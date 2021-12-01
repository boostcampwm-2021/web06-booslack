import styled from 'styled-components';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { ThemeButton } from '@global/style/mixin';

const Container = styled.div`
  width: 80vw;
  height: 95vh;

  position: relative;

  border: 0;

  margin: 5vh 1vw 0 1vw;
  overflow: hidden;
  & > span:not(:first-child) {
    font-size: x-large;
  }

  & > span:first-child {
    font-size: xx-large;
    margin-bottom: 3vh;
    font-weight: bold;
  }
`;

export const MarginedDiv = styled.div`
  & > * {
    margin: 0 3px 0 10px;
  }
`;

export const StyledLabel = styled(Label)`
  display: block;
`;

export const StyledButton = styled(LabeledDefaultButton)`
  margin-top: 5vh;
  ${ThemeButton}
`;

export const DropZoneContainer = styled.div`
  width: 350px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #868686;
  margin: 10px 10px 20px 10px;
  padding: 20px;
`;

export default Container;
