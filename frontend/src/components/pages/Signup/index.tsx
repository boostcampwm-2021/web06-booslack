import React from 'react';
import SignupContent from '@organisms/SignupContent';
import titleBooslack from '@global/image/title_booslack.png';
import { StyledImageBox } from '@pages/Login/style';
import { Container, Layout, LabelContainer } from './style';

const Signup = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  return (
    <Layout>
      <Container>
        <LabelContainer>
          <StyledImageBox image={titleBooslack} />
        </LabelContainer>
        <SignupContent />
      </Container>
    </Layout>
  );
};

export default Signup;
