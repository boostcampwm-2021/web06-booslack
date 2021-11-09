import React from 'react';
import LabeledButton from '@atoms/LabeledButton';
import Input from '@atoms/Input';
import { Link } from 'react-router-dom';
import { LabelColumn, LoginForm } from './style';

const SignupContent = (): JSX.Element => {
  const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/api/login/changepassword`;
  return (
    <>
      <LoginForm method="POST" action={BACKEND_URL}>
        <Input
          placeholder="  아이디를 입력하세요."
          width={500}
          height={60}
          name="username"
        />
        <Input
          placeholder="  새로운 비밀번호를 입력하세요."
          width={500}
          height={60}
          name="password"
        />
        <Input
          placeholder="  새로운 비밀번호를 다시 입력하세요."
          width={500}
          height={60}
          name="passwordTwo"
        />
        <LabelColumn>
          <LabeledButton
            text="확인"
            width={240}
            height={60}
            backgroundColor="#ECDEEC"
            type="submit"
          />
          <Link to="/login">
            <LabeledButton
              text="취소"
              width={240}
              height={60}
              backgroundColor="#ECDEEC"
            />
          </Link>
        </LabelColumn>
      </LoginForm>
    </>
  );
};

export default SignupContent;
