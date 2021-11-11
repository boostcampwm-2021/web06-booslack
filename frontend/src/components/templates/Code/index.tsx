import React from 'react';
import { useHistory } from 'react-router-dom';
import Label from '@atoms/Label';
import { Container, StyledLabel, StyledButton } from './styles';

interface Props {
  children: JSX.Element;
}

const CodeTemplate = ({ children }: Props): JSX.Element => {
  const history = useHistory();

  return (
    <Container>
      <StyledLabel text="booslack" />

      <Label text="코드는 다음과 같습니다." />
      <StyledButton text="확인" onClick={() => history.push('workspacelist')} />
      {children}
    </Container>
  );
};

export default CodeTemplate;
