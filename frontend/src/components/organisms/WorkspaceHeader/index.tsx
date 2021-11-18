import React, { useRef, useState } from 'react';
import ImageButton from '@atoms/ImageButton';
import useRefLocate from '@hook/useRefLocate';
import { StyledInput, Container, StyledNoOverlayModal } from './styles';

const WorkspaceHeader = (): JSX.Element => {
  const ButtonRef = useRef(null);
  const [modalState, setModalState] = useState(false);

  const [xWidth, yHeight] = useRefLocate(ButtonRef, 50);

  return (
    <Container>
      <div />
      <StyledInput placeholder="Search {채널 이름}" />
      <ImageButton
        customRef={ButtonRef}
        width={38}
        height={38}
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2FYee&psig=AOvVaw3jv837jYrNQRC5johUOZqh&ust=1635839887382000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDnp83Y9vMCFQAAAAAdAAAAABAD"
        onClick={() => setModalState(true)}
      />
      <StyledNoOverlayModal
        xWidth={xWidth - 260}
        yHeight={yHeight + 50}
        isOpened={modalState}
        onClose={() => setModalState(false)}
        customRef={ButtonRef}
      >
        <></>
      </StyledNoOverlayModal>
    </Container>
  );
};

export default WorkspaceHeader;
