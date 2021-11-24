import styled from 'styled-components';
import ViewportInput from '@atoms/ViewPortInput';

interface Props {
  width?: number;
  height?: number;
}

export const Container = styled.div<Props>`
  display: flex;
  width: ${({ width }) => {
    if (width) return `${width}vw`;
    return '100%';
  }};
  height: ${({ height }) => {
    if (height) return `${height}vh`;
    return 'inherit';
  }};
`;

export const StyledViewportInput = styled(ViewportInput)`
  display: flex;
  width: 100%;
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  --saf-0: rgba(var(--sk_primary_foreground, 29, 28, 29), 0.3);
  border: 1px solid var(--saf-0);
  border-radius: 4px;
  color: rgba(var(--sk_foreground_max_solid, 97, 96, 97), 1);
  display: flex;
  padding: 0 8px;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  font-size: 15px;
  line-height: 1.46668;
  font-weight: 400;
`;

export default Container;
