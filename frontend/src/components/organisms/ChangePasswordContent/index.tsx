import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateLoginModal from '@organisms/CreateLoginModal';
import { useRecoilState } from 'recoil';
import { LoginModalState } from '@state/modal';
import useInputs from '@hook/useInputs';
import { validatePassword } from '@global/util/validatePassword';
import {
  LoginInput,
  LabelColumn,
  LoginForm,
  NoticeDiv,
  RouterLabeledButton,
} from './style';

const initialData = {
  username: '',
  password: '',
  passwordTwo: '',
};

const contextList: string[] = [
  '아이디를 8자리 이상 20자리 이하로 입력해주세요.',
  '비밀번호를 8자리 이상 20자리 이하로 입력해주세요.',
  '다시 입력한 비밀번호를 8자리 이상 20자리 이하로 입력해주세요.',
  '입력한 비밀번호가 서로 다릅니다.',
];

const SignupContent = (): JSX.Element => {
  let flag = true;
  const [context, setContext] = useState<any | null>(null);
  const [LoginModal] = useRecoilState(LoginModalState);
  const [{ username, password, passwordTwo }, onChange] =
    useInputs(initialData);
  const [isLoginModalOpen, setIsLoginModalOpen] =
    useRecoilState(LoginModalState);
  const onValidate = (e) => {
    flag = false;
    const result: string = validatePassword(password);
    if (username.length < 8 || username.length > 20) {
      setContext(contextList[0]);
    } else if (password.length < 8 || password.length > 20) {
      setContext(contextList[1]);
    } else if (passwordTwo.length < 8 || passwordTwo.length > 20) {
      setContext(contextList[2]);
    } else if (password !== passwordTwo) {
      setContext(contextList[3]);
    } else if (result !== 'success') {
      setContext(result);
    } else {
      flag = true;
    }
    if (!flag) {
      setIsLoginModalOpen(true);
      e.preventDefault();
    }
  };
  const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/api/login/changepassword`;
  return (
    <>
      <LoginForm method="POST" action={BACKEND_URL}>
        <LoginInput
          placeholder="아이디를 입력하세요."
          name="username"
          type="text"
          onChange={onChange}
          value={username}
        />
        <LoginInput
          placeholder="새로운 비밀번호를 입력하세요."
          name="password"
          type="password"
          onChange={onChange}
          value={password}
        />
        <LoginInput
          placeholder="  새로운 비밀번호를 다시 입력하세요."
          name="passwordTwo"
          type="password"
          onChange={onChange}
          value={passwordTwo}
        />
        <NoticeDiv>
          비밀번호는 8자리 이상 20자리 이하로 구성되어야 하며, 영어
          대문자/소문자, 1개 이상의 숫자, 1개 이상의 특수문자 로 구성되어야
          합니다.
        </NoticeDiv>
        <LabelColumn>
          <RouterLabeledButton text="확인" type="submit" onClick={onValidate} />
          <Link to="/login">
            <RouterLabeledButton text="취소" type="button" />
          </Link>
        </LabelColumn>
      </LoginForm>
      {LoginModal && <CreateLoginModal Content={context} />}
    </>
  );
};

export default SignupContent;
