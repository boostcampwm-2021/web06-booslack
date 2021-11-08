import styled from 'styled-components';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

export const Container = styled.button`
  background: transparent;
  border: 0px solid;
`;

export const ToggleOn = styled(BsToggleOn)`
  color: #34785c;
`;

export const ToggleOff = styled(BsToggleOff)`
  color: #8e8d8e;
`;
