import React from 'react';
import { useHistory } from 'react-router-dom';
import Label from '@atoms/Label';
import { Container, StyledLabel, StyledButton } from './style';

const NotFound = (): JSX.Element => {
  const history = useHistory();

  return (
    <Container>
      <StyledLabel text="404" />

      <Label text="Oops! Page is not found!" />
      <StyledButton text="되돌아가기" onClick={() => history.goBack()} />
    </Container>
  );
};

export default NotFound;
