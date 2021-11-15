import React from 'react';
import Label from '@atoms/Label';
import { Container, StyledLabel, StyledButton } from './style';

interface Props {
  history: any;
}

const NotFound = ({ history }: Props): JSX.Element => {
  return (
    <Container>
      <StyledLabel text="404" />
      <Label text="Oops! Page is not found!" />
      <StyledButton text="되돌아가기" onClick={() => history.goBack()} />
    </Container>
  );
};

export default NotFound;
