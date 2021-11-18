import React from 'react';
import ImageButton from '@atoms/ImageButton';

import { StyledInput, Container } from './styles';

const WorkspaceHeader = (): JSX.Element => {
  return (
    <Container>
      <div></div>
      <StyledInput placeholder="Search {채널 이름}" />
      <ImageButton
        width={38}
        height={38}
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2FYee&psig=AOvVaw3jv837jYrNQRC5johUOZqh&ust=1635839887382000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDnp83Y9vMCFQAAAAAdAAAAABAD"
        onClick={() => {}}
      />
    </Container>
  );
};

export default WorkspaceHeader;
