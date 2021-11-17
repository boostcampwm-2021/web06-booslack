import React from 'react';
import Label from '@atoms/Label';
import { useHistory } from 'react-router-dom';
import { Container, StyledLabel, StyledButton } from './style';

const GetError = (): JSX.Element => {
  const history = useHistory();
  return (
    <Container>
      <StyledLabel text="Something went wrong. We're sorry" />
      <Label text="사이트에 다시 방문하고 싶으시다면, 아래 되돌아가기 버튼을 눌러주세요." />
      <StyledButton text="되돌아가기" onClick={() => history.goBack()} />
    </Container>
  );
};

export default GetError;
