import React from 'react';
import Label from '@atoms/Label';
import { Container, StyledLabel, StyledButton } from './styles';

interface Props {
  onClick: () => void;
  children: JSX.Element;
  text: string;
}

const CodeTemplate = ({ children, onClick, text }: Props): JSX.Element => {
  return (
    <Container>
      <StyledLabel text="booslack" />

      <Label text={text} />
      {children}
      <StyledButton text="확인" onClick={onClick} />
    </Container>
  );
};

export default CodeTemplate;
