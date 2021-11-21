import IconButton from '@atoms/IconButton';
import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: -1;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToolbarMiddle = styled.div`
  padding: 4px;
  opacity: 0.2;

  opacity: ${(props) => (props.focused ? 1 : 0.2)};
`;

export const ToolbarSuffix = styled.div`
  padding: 4px;
  grid-area: suffix;
  align-items: flex-end;
  display: flex;
  flex-shrink: 0;

  .sendButtonActive {
    background: #007a5a;
    color: #fff;
  }

  .sendButtonActive:hover {
    background: #148567;
    color: #fff;
  }
`;

export const ToolBarIconButton = styled(IconButton)`
  background: transparent;
  color: #1d1c1d;
  opacity: 0.7;
  border-radius: 2px;
  flex: 0 0 32px;

  height: 32px;
  width: 32px;

  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;

  cursor: pointer;

  margin: 0;
  padding: 0;
  border: 0;

  :not(:last-child) {
    margin-right: 1px;
  }
`;

export default Container;
