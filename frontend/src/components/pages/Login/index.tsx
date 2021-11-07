import React from 'react';
import Label from '@atoms/Label';
import LoginContent from '@organisms/LoginContent';
import { Container, Layout, LabelContainer } from './style';

const Login = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  return (
    <Layout>
      <Container>
        <LabelContainer>
          <Label text="booslack" width={240} height={20} />
        </LabelContainer>
        <LoginContent />
      </Container>
    </Layout>
  );
};

export default Login;
