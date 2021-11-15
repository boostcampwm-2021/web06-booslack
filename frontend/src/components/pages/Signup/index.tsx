import React, { useEffect, useState } from 'react';
import Label from '@atoms/Label';
import SignupContent from '@organisms/SignupContent';
import checkIsLogin from '@global/util/CheckIsLogin';
import { Redirect } from 'react-router-dom';
import { Container, Layout, LabelContainer } from './style';

const Signup = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  if (window.sessionStorage) window.sessionStorage.clear();
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (checkIsLogin()) {
    return <Redirect to="/notlogout" />;
  }
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
