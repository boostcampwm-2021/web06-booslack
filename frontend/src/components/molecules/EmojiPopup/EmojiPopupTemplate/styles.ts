import Label from '@atoms/Label';
import styled from 'styled-components';
import { RoundScrollBar } from '@global/style/mixin';
import { ifProp } from 'styled-tools';

export const Container = styled.div`
  ${RoundScrollBar};
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  max-height: 300px;
`;

interface Props {
  selected: boolean;
}

export const UserContainer = styled.div<Props>`
  padding: 0 1rem;
  background-color: ${ifProp({ selected: true }, '#2C639E', 'transparent')};
`;

export const UserElement = styled.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PrimaryContent = styled.div``;

export const SecondaryContent = styled.div``;

export const StyledBoldLabel = styled(Label)`
  font-weight: bold;
`;
