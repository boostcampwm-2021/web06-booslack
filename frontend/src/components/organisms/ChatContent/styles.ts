import { scrollIfHover } from '@global/mixin';
import styled from 'styled-components';

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  position: relative;
  height: inherit;
  width: ${(props) => props.width ?? 'inherit'};
  ${scrollIfHover}
`;

export default Container;
