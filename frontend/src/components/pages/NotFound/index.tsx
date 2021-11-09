import React from 'react';
import { useHistory } from 'react-router-dom';
import Label from '@atoms/Label';
import ImageBox from '@atoms/Image';
import notFoundImage from '@global/image/pagenotfound.jpg';

import { Container, Layout, StyledButton } from './style';

const NotFound = (): JSX.Element => {
  const history = useHistory();

  return (
    <Layout>
      <Container>
        <Label text="page is not found!" />
        <ImageBox image={notFoundImage} />
        <StyledButton text="되돌아가기" onClick={() => history.goBack()} />
      </Container>
    </Layout>
  );
};

export default NotFound;
