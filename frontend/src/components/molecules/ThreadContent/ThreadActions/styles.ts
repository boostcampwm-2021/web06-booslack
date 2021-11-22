import IconButton from '@atoms/IconButton';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -16px;
  right: 17px;
  z-index: 1;
  display: 'inline-flex';
`;

export const ThreadActionsGroup = styled.div`
  background: #ffffff;
  line-height: 1;
  margin-left: 8px;
  padding: 2px;
  border-radius: 0.375em;
  display: flex;
  border: unset;
  box-shadow: 0 0 0 1px #1d1c1d, 0 1px 3px 0 #000000;
`;

export const ActionButton = styled(IconButton)`
  color: #1d1c1d;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border 0;
  cursor: pointer;
`;
