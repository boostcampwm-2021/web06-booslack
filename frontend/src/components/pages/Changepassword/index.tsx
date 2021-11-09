import React from 'react';
import Label from '@atoms/Label';
import ChangePasswordContent from '@organisms/ChangePasswordContent';
import { Logout } from '@global/util/Logout';
import { Container, Layout, LabelContainer } from './style';

const Changepassword = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  Logout();
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
