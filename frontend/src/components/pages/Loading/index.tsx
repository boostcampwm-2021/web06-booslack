import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButton } from '@pages/NotFound/style';
import { Container, LoadingLoader, StyledLabel } from './style';

const Loading = (): JSX.Element => {
  const history = useHistory();
  return (
    <Container>
      <LoadingLoader size={300} color="#5c8dcf" />
      <StyledLabel text="페이지 이동 중입니다. 잠시만 기다려주세요." />
      <StyledButton text="되돌아가기" onClick={() => history.goBack()} />
    </Container>
  );
};

export default Loading;
