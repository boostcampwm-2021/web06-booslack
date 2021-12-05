import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import ImageBox from '@atoms/ImageBox';

export const Container = styled.div`
  width: 100%;
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

export const PrimaryContent = styled.div`
  padding: 3px;
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
`;

export const SecondaryContent = styled.div``;

export const StyledImageBox = styled(ImageBox)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
`;
