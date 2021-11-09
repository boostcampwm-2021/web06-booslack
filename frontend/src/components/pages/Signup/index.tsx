import React from 'react';
import Label from '@atoms/Label';
import SignupContent from '@organisms/SignupContent';
import { Container, Layout, LabelContainer } from './style';

const Signup = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  return (
    <Layout>
      <Container>
        <LabelContainer>
          <Label text="booslack" width={240} height={20} />
        </LabelContainer>
        <SignupContent />
      </Container>
    </Layout>
  );
};

export default Signup;
