import React from 'react';
import { useHistory } from 'react-router-dom';
import Label from '@atoms/Label';
import { logout } from '@global/util/auth';
import {
  Container,
  StyledLabel,
  StyledButton,
  StyledButtonColumn,
} from './style';

const NotFound = (): JSX.Element => {
  const history = useHistory();
  return (
    <Container>
      <StyledLabel text="404" />
      <Label text="해당 페이지는 로그인한 유저가 사용이 불가능한 페이지입니다. 로그아웃하시겠습니까?" />
      <StyledButtonColumn>
        <StyledButton text="로그아웃하기" onClick={logout} />
        <StyledButton text="되돌아가기" onClick={() => history.goBack()} />
      </StyledButtonColumn>
    </Container>
  );
};

export default NotFound;
