import Label from '@atoms/Label';
import LabeledButton from '@atoms/LabeledButton';
import Modal from '@atoms/Modal';
import ToggleButton from '@atoms/ToggleButton';
import LabeledInput from '@molecules/LabeledInput';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  max-width: 580px;
`;

export const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 16px;
`;

export const Header = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLabel = styled(Label)`
  font-size: 2rem;
  font-weight: bold;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const StyledLabeledInput = styled(LabeledInput)`
  margin-top: 1rem;
`;

export const StyledLightLabel = styled(Label)`
  color: grey;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const ToggleLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
`;

export const StyledToggleButton = styled(ToggleButton)`
  width: 36px;
  height: 36px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;

export const StyledLabeledButton = styled(LabeledButton)`
  background-color: #dddddd;
  color: #4e4d4e;
  margin-left: 1rem;
  border-radius: 4px;
  padding: 12px 12px;
  font-size: 16px;
  font-weight: bold;
  min-width: 80px;
`;
