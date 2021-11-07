import React from 'react';
import LabeledButton from '@atoms/LabeledButton';
import Input from '@atoms/Input';
import { Link } from 'react-router-dom';
import { LabelColumn, LoginForm } from './style';

const LoginContent = (): JSX.Element => {
  const handleGithubClick = async () => {
    const GITHUB_CLIENT_ID: string = process.env.REACT_APP_GITHUB_CLIENT_ID;
    await window.location.replace(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`,
    );
  };
  return (
    <>
      <LabeledButton
        text="Github으로 로그인"
        width={500}
        height={60}
        backgroundColor="#C8C7EF"
        onClick={handleGithubClick}
      />
      <LoginForm>
        <Input placeholder="  example@email.com" width={500} height={60} />
        <Input placeholder="  password" width={500} height={60} />
        <LabeledButton
          text="이메일으로 로그인"
          width={500}
          height={60}
          backgroundColor="#ECDEEC"
        />
      </LoginForm>
      <LabelColumn>
        <Link to="/signup">
          <LabeledButton
            text="회원 가입"
            width={240}
            height={60}
            backgroundColor="#ECDEEC"
          />
        </Link>
        <Link to="/changepassword">
          <LabeledButton
            text="비밀 번호 찾기"
            width={240}
            height={60}
            backgroundColor="#ECDEEC"
          />
        </Link>
      </LabelColumn>
    </>
  );
};

export default LoginContent;
