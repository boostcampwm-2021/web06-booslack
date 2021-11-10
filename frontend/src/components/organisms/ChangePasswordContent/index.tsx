import React from 'react';
import { Link } from 'react-router-dom';
import {
  LoginInput,
  LabelColumn,
  LoginForm,
  RouterLabeledButton,
} from './style';

const SignupContent = (): JSX.Element => {
  const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/api/login/changepassword`;
  return (
    <>
      <LoginForm method="POST" action={BACKEND_URL}>
        <LoginInput
          placeholder="아이디를 입력하세요."
          name="username"
          type="text"
        />
        <LoginInput
          placeholder="새로운 비밀번호를 입력하세요."
          name="password"
          type="password"
        />
        <LoginInput
          placeholder="  새로운 비밀번호를 다시 입력하세요."
          name="passwordTwo"
          type="password"
        />
        <LabelColumn>
          <RouterLabeledButton text="확인" type="submit" />
          <Link to="/login">
            <RouterLabeledButton text="취소" type="button" />
          </Link>
        </LabelColumn>
      </LoginForm>
    </>
  );
};

export default SignupContent;
