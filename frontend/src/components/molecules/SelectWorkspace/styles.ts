import styled from 'styled-components';
import ImageBox from '@atoms/ImageBox';

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  display: flex;

  width: ${(props) => props.width ?? 'inherit'};
  flex-direction: row;
  align-items: center;
  height: inherit;

  margin-left: 10px;
  overflow: visible;
`;

export const TextSet = styled.div`
  flex-direction: column;
  margin: 10px 10px 10px 10px;

  &>: first-child {
    font-weight: bold;
  }
  &>: last-child {
    color: grey;
  }
`;

export const StyledImageColumn = styled.div`
  min-width: 70px;
  min-height: 70px;
  width: 70px;
  height: 70px;
`;

export const StyledImageBox = styled(ImageBox)`
  border-radius: 5px;
`;
