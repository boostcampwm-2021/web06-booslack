import React from 'react';
import ChangePasswordContent from '@organisms/ChangePasswordContent';
import titleBooslack from '@global/image/title_booslack.png';
import { StyledImageBox } from '@pages/Login/style';
import { Container, Layout, LabelContainer } from './style';

const Changepassword = (): JSX.Element => {
  if (window.sessionStorage) window.sessionStorage.clear();
  return (
    <Layout>
      <Container>
        <LabelContainer>
          <StyledImageBox image={titleBooslack} />
        </LabelContainer>
        <ChangePasswordContent />
      </Container>
    </Layout>
  );
};

export default Changepassword;
