import React from 'react';
import { Link } from 'react-router-dom';
import {
  LoginInput,
  EmailLabeledButton,
  GitLabeledButton,
  LabelColumn,
  LoginForm,
  RouterLabeledButton,
} from './style';

const LoginContent = (): JSX.Element => {
  const handleGithubClick = async () => {
    const GITHUB_CLIENT_ID: string = process.env.REACT_APP_GITHUB_CLIENT_ID;
    await window.location.replace(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`,
    );
  };
  const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/api/login/login`;
  return (
    <>
      <GitLabeledButton text="Github으로 로그인" onClick={handleGithubClick} />
      <LoginForm method="POST" action={BACKEND_URL}>
        <LoginInput
          placeholder="example@email.com"
          name="username"
          type="text"
        />
        <LoginInput placeholder="password" name="password" type="password" />
        <EmailLabeledButton text="이메일으로 로그인" type="submit" />
      </LoginForm>
      <LabelColumn>
        <Link to="/signup">
          <RouterLabeledButton text="회원 가입" type="button" />
        </Link>
        <Link to="/changepassword">
          <RouterLabeledButton text="비밀 번호 변경" type="button" />
        </Link>
      </LabelColumn>
    </>
  );
};

export default LoginContent;
