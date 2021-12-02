import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useInputs from '@hook/useInputs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { LoginModalState } from '@state/modal';
import CreateLoginModal from '@organisms/CreateLoginModal';
import { checkUserLogin } from '@global/util/auth';
import userState from '@state/user';
import {
  LoginInput,
  EmailLabeledButton,
  GitLabeledButton,
  LabelColumn,
  RouterLabeledButton,
  LoginContainer,
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
  const [LoginModal] = useRecoilState(LoginModalState);
  const setUserState = useSetRecoilState(userState);
  const setIsLoginModalOpen = useSetRecoilState(LoginModalState);
  const [{ username, password }, onChange] = useInputs(initialData);

  const history = useHistory();
  const onValidate = async (event) => {
    try {
      if (username.length === 0 || password.length === 0) {
        setContext(username.length !== 0 ? contextList[1] : contextList[0]);
        setIsLoginModalOpen(true);
        event.preventDefault();
        return;
      }
      const res = await checkUserLogin(username, password);

      if (!res) {
        setContext(contextList[2]);
        setIsLoginModalOpen(true);
      } else {
        setUserState(res);
        history.push('/workspacelist');
      }
    } catch (e) {
      throw new Error('validate fail');
    }
  };
  const handleGithubClick = async () => {
    try {
      const GITHUB_CLIENT_ID: string = process.env.REACT_APP_GITHUB_CLIENT_ID;
      await window.location.replace(
        `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`,
      );
    } catch (e) {
      throw new Error('validate fail');
    }
  };
  return (
    <>
      <GitLabeledButton text="Github으로 로그인" onClick={handleGithubClick} />
      <LoginContainer>
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
        <EmailLabeledButton text="LOG IN" type="submit" onClick={onValidate} />
      </LoginContainer>
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
