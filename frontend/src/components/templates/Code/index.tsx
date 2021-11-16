import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import Label from '@atoms/Label';
import { codeModalState } from '@state/modal';
import { Container, StyledLabel, StyledButton } from './styles';

interface Props {
  onClick: () => void;
  children: JSX.Element;
  text: string;
}

const CodeTemplate = ({ children, onClick, text }: Props): JSX.Element => {
  const resetModalState = useResetRecoilState(codeModalState);

  useEffect(() => {
    return () => {
      resetModalState();
    };
  });

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
