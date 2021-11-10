import styled from 'styled-components';
import ImageButton from '@atoms/ImageButton';

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  display: flex;

  width: ${(props) => props.width ?? 'inherit'};
  flex-direction: row;
  height: inherit;

  margin-left: 10px;
  overflow: visible;
`;

export const TextSet = styled.div`
  flex-direction: column;

  &>: first-child {
    font-weight: bold;
  }
`;

export const StlyedImageButton = styled(ImageButton)`
  min-width: 70px;
  height: 70px;
`;
