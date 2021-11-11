import Modal from '@atoms/Modal';
import styled from 'styled-components';
import LabeledButton from '@atoms/LabeledButton';

export const StyledModal = styled(Modal)`
  max-width: 580px;
  width: 380px;
  height: 250px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 170px;
  padding: 5px;
`;

export const ModalButton = styled(LabeledButton)`
  background-color: #c8c7ef;
  width: 240px;
  height: 60px;
`;

export const ModalMessage = styled.span`
  font-size: 26px;
  box-sizing: content-box;
  font-weight: 500;
  width: 330px;
`;
