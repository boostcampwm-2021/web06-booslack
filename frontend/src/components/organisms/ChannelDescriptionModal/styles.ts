import Input from '@atoms/Input';
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
  padding: 1rem;
  font-size: 22px;
  font-weight: bold;
`;

export const StyledInput = styled(Input)`
  margin: 1rem;
`;

export const CancelButton = styled(LabeledButton)`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 0 12px;
  font-size: 16px;
  font-weight: bold;
  min-width: 80px;
`;

export const SaveButton = styled(LabeledButton)`
  background-color: green;
  color: white;
  margin-left: 1rem;
  border-radius: 4px;
  padding: 12px 12px;
  font-size: 16px;
  font-weight: bold;
  min-width: 80px;
`;

export const ButtonContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  /* flex-direction: column; */
`;

// interface Props {
//   highlight: boolean;
// }
// export const Tab = styled(LabeledButton)<Props>`
//   margin-right: 1rem;
//   color: ${(props) => props.highlight || 'grey'};
//   border-bottom: ${(props) => props.highlight && '2px solid green'};
// `;

export const StyledModal = styled(Modal)`
  max-width: 540px;
`;
