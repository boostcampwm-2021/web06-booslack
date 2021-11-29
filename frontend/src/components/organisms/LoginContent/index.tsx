import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInputs from '@hook/useInputs';
import { useRecoilState } from 'recoil';
import { LoginModalState } from '@state/modal';
import CreateLoginModal from '@organisms/CreateLoginModal';
import { checkUser } from '@global/util/auth';
import {
  LoginInput,
  EmailLabeledButton,
  GitLabeledButton,
  LabelColumn,
  LoginForm,
  RouterLabeledButton,
} from './style';

const initialData = {
  username: '',
  password: '',
};

const contextList: string[] = [
  '아이디를 입력해주세요',
  '비밀번호를 입력해주세요',
  '사용자의 아이디가 존재하지 않거나 비밀번호가 틀렸습니다.',
  '회원 정보 인증이 완료되었습니다! 접속하기를 눌러 booslack을 이용해주세요.',
];

const LoginContent = (): JSX.Element => {
  const [context, setContext] = useState<string | null>(null);
  const [ableToLogin, setAbleToLogin] = useState<boolean>(false);
  const [loginButtonContext, setLoginButtonContext] = useState<string>('LOG IN');
  const [LoginModal] = useRecoilState(LoginModalState);
  const [{ username, password }, onChange] = useInputs(initialData);
  const [isLoginModalOpen, setIsLoginModalOpen] = useRecoilState(LoginModalState);
  const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/api/login/login`;
  const onValidate = async (event) => {
    if (username.length === 0 || password.length === 0) {
      setContext(username.length !== 0 ? contextList[1] : contextList[0]);
      setIsLoginModalOpen(true);
      event.preventDefault();
      return;
    }
    const data = await checkUser(username, password);
    if (data.message === 'error') {
      setContext(contextList[2]);
      setIsLoginModalOpen(true);
      setAbleToLogin(false);
      setLoginButtonContext('LOG IN');
    } else {
      setAbleToLogin(true);
      setLoginButtonContext('인증이 완료되었습니다. 한번 더 클릭해주세요!');
    }
  };
  const checkIsUser = async (event) => {
    if (!ableToLogin) event.preventDefault();
  };
  const checkIsLogin = () => {
    if (ableToLogin) {
      setIsLoginModalOpen(false);
    }
  };
  const handleGithubClick = async (e) => {
    const GITHUB_CLIENT_ID: string = process.env.REACT_APP_GITHUB_CLIENT_ID;
    await window.location.replace(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`,
    );
  };
  return (
    <>
      <GitLabeledButton text="Github으로 로그인" onClick={handleGithubClick} />
      <LoginForm
        method="POST"
        action={BACKEND_URL}
        onSubmit={checkIsUser}
        onChange={checkIsLogin}
      >
        <LoginInput
          placeholder="example or example@email.com"
          name="username"
          type="text"
          value={username}
          onChange={onChange}
        />
        <LoginInput
          placeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
        />
        <EmailLabeledButton
          text={loginButtonContext}
          type="submit"
          onClick={onValidate}
        />
      </LoginForm>
      <LabelColumn>
        <Link to="/signup">
          <RouterLabeledButton text="회원 가입" type="button" />
        </Link>
        <Link to="/changepassword">
          <RouterLabeledButton text="비밀 번호 변경" type="button" />
        </Link>
      </LabelColumn>
      {LoginModal && <CreateLoginModal Content={context} />}
    </>
  );
};

export default LoginContent;
