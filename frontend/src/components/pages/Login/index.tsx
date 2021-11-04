import React from 'react';
import Label from '@atoms/Label';
import LabeledButton from '@atoms/LabeledButton';
import Input from '@atoms/Input';
import { Container, Layout, LabelContainer, LabelColumn } from './style';

const Login = (): JSX.Element => {
  return (
    <Layout>
      <Container>
        <LabelContainer>
          <Label text="booslack" width={240} height={20} />
        </LabelContainer>
        <LabeledButton
          text="Github으로 로그인"
          width={500}
          backgroundColor="#C8C7EF"
        />
        <Input placeholder="  example@email.com" width={500} height={50} />
        <LabeledButton text="이메일으로 로그인" width={500} />
        <LabelColumn>
          <LabeledButton text="회원 가입" width={240} />
          <LabeledButton text="비밀 번호 찾기" width={240} />
        </LabelColumn>
      </Container>
    </Layout>
  );
};

export default Login;
