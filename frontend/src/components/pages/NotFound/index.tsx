import React from 'react';
import { useHistory } from 'react-router-dom';
import Label from '@atoms/Label';
import { Container, Layout, StyledButton } from './style';

const NotFound = (): JSX.Element => {
  const history = useHistory();

  return (
    <Layout>
      <Container>
        <Label text="404 page is not found!" />
        <StyledButton text="되돌아가기" onClick={() => history.goBack()} />
      </Container>
    </Layout>
  );
};

export default NotFound;
