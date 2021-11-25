import styled from 'styled-components';
import Label from '@atoms/Label';
import ThreadContent from '@molecules/ThreadContent';
import { scrollIfHover } from '@global/mixin';

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  position: relative;
  height: inherit;
  min-height: 40vh;
  width: ${(props) => props.width ?? 'inherit'};
  ${scrollIfHover}
`;
export const AbsoluteLabel = styled(Label)`
  position: absolute;
  background-color: #fff;
  z-index: 1;

  margin: 10px 8px 0 6px;
  padding-right: 10px;
`;

export const RowDiv = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  flex-direction: row;
  position: relative;

  margin: 2px 0 25px 0;
`;

export const StyledThreadContent = styled(ThreadContent)`
  margin-top: 25px;
`;

export const GreyLine = styled.div`
  display: flex;
  width: inherit;
  height: 16px;

  border-top: 0;
  border-bottom: 1px solid rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;

  margin: 3px 0 3px 6px;
`;

export const MarginDiv = styled.div`
  margin-top: 20vh;
`;

export default Container;
