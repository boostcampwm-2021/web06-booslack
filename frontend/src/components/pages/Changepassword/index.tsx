import React from 'react';
import Label from '@atoms/Label';
import ChangePasswordContent from '@organisms/ChangePasswordContent';
import axios from 'axios';
import { Container, Layout, LabelContainer } from './style';

const Changepassword = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/login/logout`;
  const response = axios.get(BACKEND_URL, {
    withCredentials: true,
    headers: {
      'Allow-Control-Allow-Origin': '*',
      credentials: 'include',
    },
  });
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
