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

  &.toolbar--active {
    border-top: 1px solid #9e9e9e;
    background-color: rgba(var(--sk_primary_background, 181, 181, 181), 0.3);
  }
`;

export const ToolbarMiddle = styled.div<{ focused: boolean }>`
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

  cursor: auto;

  margin: 0;
  padding: 0;
  border: 0;

  :not(:last-child) {
    margin-right: 1px;
  }

  &.active {
    cursor: pointer;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  background: transparent;
  color: #1d1c1d;
  opacity: 0.7;
  border-radius: 2px;
  flex: 0 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

export default Container;
