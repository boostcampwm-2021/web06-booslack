import styled from 'styled-components';
import { scrollIfHover } from '@global/style/mixin';

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
