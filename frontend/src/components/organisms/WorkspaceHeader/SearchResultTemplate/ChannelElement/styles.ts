import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import Label from '@atoms/Label';

export const BackgroundContainer = styled.div`
  &: hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }
`;

interface Props {
  selected: boolean;
}

export const Container = styled.div<Props>`
  background-color: ${ifProp({ selected: true }, '#2C639E', 'transparent')};
  color: ${(props) => (props.selected ? '#ffffff' : '#000000')};
  padding: 1rem;
`;

export const StyledLabel = styled(Label)`
  padding-right: 1rem;
`;
