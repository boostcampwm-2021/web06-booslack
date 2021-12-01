import styled from 'styled-components';
import Label from '@atoms/Label';
import Modal from '@atoms/Modal';
import DivLists from '@atoms/DivLists';
import ImageBox from '@atoms/ImageBox';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { bouncing, flexAlignCenter, ThemeButton } from '@global/style/mixin';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const StyledTitleLabel = styled(Label)`
  padding: 20px 1rem 20px 3rem;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid #f8f8f8;
`;

export const StyledLabel = styled(Label)`
  font-weight: bold;
`;

export const MenuContainer = styled.div`
  width: 25%;
  height: 100%;
  min-width: 150px;
  margin: 0 1rem;
`;

export const StyledImageBox = styled(ImageBox)`
  width: 80px;
  height: 80px;
  margin: 30px 30px 10px 30px;
`;

export const StyledDivLists = styled(DivLists)<{
  isClicked: number;
  index: number;
  color?: string;
}>`
  width: 100%;

  margin: 30px 0px 30px 0px;
  padding: 3px;
  ${({ isClicked, index }) => {
    return isClicked === index ? 'color: #fff; background-color: #1164a3;' : '';
  }});

  color: ${({ color }) => color};
`;

export const RowDiv = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: row;
`;

export const RowSpaceAroundDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const ColDiv = styled.div`
  ${flexAlignCenter}
  width: 150px;
  height: 150px;

  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const MiddleDiv = styled.div`
  ${flexAlignCenter}
  width: 100%;
  height: 50px;

  text-align: center;
`;

export const StyledModal = styled(Modal)`
  width: 50vw;
  min-width: 580px;
  height: 40vh;
  min-height: 480px;

  background: #fff;
  line-height: 1;
  margin-left: 8px;
  padding: 2px;
  border-radius: 0.375em;
  border: unset;
  box-shadow: 0 0 0 1px #1d1c1d, 0 1px 3px 0 #000000;
`;

export const StyledButton = styled(LabeledDefaultButton)`
  width: 100px;
  height: 30px;

  ${ThemeButton}
  ${bouncing}
`;
