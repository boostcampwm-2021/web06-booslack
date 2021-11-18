import React from 'react';
import { useHistory } from 'react-router-dom';
import Label from '@atoms/Label';
import {
  Container,
  StyledLabel,
  StyledButton,
  StyledButtonColumn,
} from './style';

const NotLogin = (): JSX.Element => {
  const history = useHistory();
  return (
    <Container>
      <StyledLabel text="404" />
      <Label text="해당 페이지는 로그인한 유저만 사용이 가능한 페이지입니다. 로그인하시겠습니까?" />
      <StyledButtonColumn>
        <StyledButton
          text="로그인하기"
          onClick={() => history.push('/login')}
        />
        <StyledButton text="되돌아가기" onClick={() => history.goBack()} />
      </StyledButtonColumn>
    </Container>
  );
};

export default NotLogin;
