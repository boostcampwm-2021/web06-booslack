import React from 'react';
import Label from '@atoms/Label';
import ChangePasswordContent from '@organisms/ChangePasswordContent';
import { Container, Layout, LabelContainer } from './style';

const Changepassword = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  return (
    <Layout>
      <Container>
        <LabelContainer>
          <Label text="booslack" width={240} height={20} />
        </LabelContainer>
        <ChangePasswordContent />
      </Container>
    </Layout>
  );
};

export default Changepassword;
