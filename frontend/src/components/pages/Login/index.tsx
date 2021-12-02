import React from 'react';
import LoginContent from '@organisms/LoginContent';
import titleBooslack from '@global/image/title_booslack.png';
import { Container, Layout, LabelContainer, StyledImageBox } from './style';

const Login = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  return (
    <Layout>
      <Container>
        <LabelContainer>
          <StyledImageBox image={titleBooslack} />
        </LabelContainer>
        <LoginContent />
      </Container>
    </Layout>
  );
};

export default Login;
