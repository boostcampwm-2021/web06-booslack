import React from 'react';
import LabeledButton from '@atoms/LabeledButton';
import Input from '@atoms/Input';
import { LabelColumn, LoginForm } from './style';

const LoginContent = (): JSX.Element => {
  return (
    <>
      <LabeledButton
        text="Github으로 로그인"
        width={500}
        backgroundColor="#C8C7EF"
      />
      <LoginForm>
        <Input placeholder="  example@email.com" width={500} height={50} />
        <LabeledButton text="이메일으로 로그인" width={500} />
      </LoginForm>
      <LabelColumn>
        <LabeledButton text="회원 가입" width={240} />
        <LabeledButton text="비밀 번호 찾기" width={240} />
      </LabelColumn>
    </>
  );
};

export default LoginContent;
