import styled from 'styled-components';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { ThemeButton } from '@global/mixin';

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

export default Container;
