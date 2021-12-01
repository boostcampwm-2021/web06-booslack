import styled from 'styled-components';
import Modal from '@atoms/Modal';

interface Props {
  width: number;
  height: number;
}

export const StyledModal = styled(Modal)`
  max-width: 360px;
  min-width: 200px;
`;

export const Container = styled.div<Props>`
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 16px;
  padding: 12px 24px;
`;
