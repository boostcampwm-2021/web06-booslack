import ImageBox from '@atoms/ImageBox';
import Label from '@atoms/Label';
import LabeledButton from '@atoms/LabeledButton';
import Popup from '@atoms/Popup';
import styled from 'styled-components';

interface Props {
  x?: number;
  y?: number;
}

export const StyledPopup = styled(Popup)<Props>`
  position: fixed;
  background-color: white;
  top: ${(props) => (props.y ? `${props.y}px` : '50px')};
  left: ${(props) => (props.x ? `${props.x}px` : '42vw')};
  width: 300px;
  height: 500px;

  box-shadow: 0 0 0 1px rgb(29 28 29 / 13%), 0 4px 12px 0 rgb(0 0 0 / 12%);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const StyledImageBox = styled(ImageBox)`
  flex: 2 1 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const StyledBoldLabel = styled(Label)`
  font-size: 22px;
  font-weight: 900;
`;

export const StyledBlueLabel = styled(Label)`
  color: #1264a3;
  padding: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px;
`;

export const StyledLabeledButton = styled(LabeledButton)`
  border: 1px solid #8e8e8e;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 15px;
`;
