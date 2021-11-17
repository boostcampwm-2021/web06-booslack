import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import Label from '@atoms/Label';
import { codeModalState } from '@state/modal';
import { copyText } from '@global/util';
import { Container, StyledLabel, StyledButton, StyledDiv } from './styles';

interface Props {
  onClick: () => void;
  children: JSX.Element;
  text: string;
  code: string;
}

const CodeTemplate = ({
  children,
  onClick,
  text,
  code,
}: Props): JSX.Element => {
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
      <StyledDiv>
        <StyledButton text="copy text" onClick={() => copyText(code)} />
        <StyledButton text="확인" onClick={onClick} />
      </StyledDiv>
    </Container>
  );
};

export default CodeTemplate;
