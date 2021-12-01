import Label from '@atoms/Label';
import LabeledButton from '@atoms/LabeledButton';
import Modal from '@atoms/Modal';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 16px;
`;

export const StyledLabel = styled(Label)`
  margin: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const TabContainer = styled.div`
  margin: 0 1rem;
`;

interface Props {
  highlight: boolean;
}
export const Tab = styled(LabeledButton)<Props>`
  margin-right: 1rem;
  color: ${(props) => props.highlight || 'grey'};
  border-bottom: ${(props) => props.highlight && '2px solid green'};
`;

export const StyledModal = styled(Modal)`
  max-width: 580px;
  min-height: 550px;
`;
