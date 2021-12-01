import Label from '@atoms/Label';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import ImageBox from '@atoms/ImageBox';

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
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
`;

export const StyledLabel = styled(Label)`
  padding-right: 1rem;
`;

export const StyledImageBox = styled(ImageBox)`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #989898;
  margin-right: 5px;
`;
