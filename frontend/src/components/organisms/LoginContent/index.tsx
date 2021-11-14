import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInputs from '@hook/useInputs';
import { useRecoilState } from 'recoil';
import { LoginModalState } from '@state/modal';
import CreateLoginModal from '@organisms/CreateLoginModal';
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
];

const LoginContent = (): JSX.Element => {
  const [context, setContext] = useState<string | null>(null);
  const [LoginModal] = useRecoilState(LoginModalState);
  const [{ username, password }, onChange] = useInputs(initialData);
  const [isLoginModalOpen, setIsLoginModalOpen] = useRecoilState(LoginModalState);
  const onValidate = (e) => {
    // eslint-disable-next-line no-console
    setContext(username.length !== 0 ? contextList[1] : contextList[0]);
    if (username.length === 0 || password.length === 0) {
      setIsLoginModalOpen(true);
      e.preventDefault();
    }
  };
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
          placeholder="example or example@email.com"
          name="username"
          type="text"
          onChange={onChange}
          value={username}
        />
        <LoginInput
          placeholder="password"
          name="password"
          type="password"
          onChange={onChange}
          value={password}
        />
        <span />
        <EmailLabeledButton text="LOG IN" type="submit" onClick={onValidate} />
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
