import React from 'react';
import Label from '@atoms/Label';
import LoginContent from '@organisms/LoginContent';
import { Logout } from '@global/util/Logout';
import { Container, Layout, LabelContainer } from './style';

const WorkspaceList = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  Logout();
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

export default WorkspaceList;
