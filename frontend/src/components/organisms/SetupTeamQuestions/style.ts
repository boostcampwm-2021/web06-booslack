import { flexAlignCenter } from '@global/mixin';
import styled from 'styled-components';

const Container = styled.div`
  ${flexAlignCenter}
  width: 80vw;
  height: 95vh;
`;

export const MarginedDiv = styled.div`
  & > * {
    margin: 0 3px 0 10px;
  }
`;

export default Container;
