import styled from 'styled-components';
import Label from '@atoms/Label';
import DivLists from '@atoms/DivLists';

export const Container = styled.div`
  display: flex;
  width: 75%;
  height: 100%;
  flex-direction: column;
  padding: 20px;
`;

export const StyledTitleLabel = styled(Label)`
  padding: 20px 1rem 20px 3rem;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid #f8f8f8;
`;

export const StyledLabel = styled(Label)`
  margin: 1rem;
`;

export const MenuContainer = styled.div`
  width: 25%;
  height: 100%;
  min-width: 150px;
  margin: 0 1rem;
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
