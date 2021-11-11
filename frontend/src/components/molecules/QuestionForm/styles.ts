import styled from 'styled-components';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { ThemeButton } from '@global/mixin';

export const Container = styled.div`
  position: relative;

  border: 0;

  margin: 5vh 1vw 0 1vw;
  overflow: hidden;

  & > span:first-child {
    font-size: large;
    color: #808080;
    margin-bottom: 3vh;
  }

  & > span:nth-child(3) {
    font-size: xx-large;
    font-weight: bold;
  }
`;

export const StyledLabel = styled(Label)`
  display: block;
  font-weight: bold;
  margin-bottom: 2vh;
`;

export const StyledLabeledDefaultButton = styled(LabeledDefaultButton)`
  margin-top: 5vh;
  width: 8vw;
  height: 6vh;
  ${ThemeButton}
`;

export default Container;
