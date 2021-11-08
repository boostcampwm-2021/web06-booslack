import Popup from '@atoms/Popup';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;

  & > button {
    margin: 0 5px 0 5px;
  }
`;

export const SortedPopup = styled(Popup)`
  background-color: ivory;
`;
export default Container;
