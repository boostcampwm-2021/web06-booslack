import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import ImageButton from '@atoms/ImageButton';
import useRefLocate from '@hook/useRefLocate';
import userState from '@state/user';
import { StyledInput, Container, StyledNoOverlayModal } from './styles';

const WorkspaceHeader = (): JSX.Element => {
  const ButtonRef = useRef(null);
  const [modalState, setModalState] = useState(false);

  const [xWidth, yHeight] = useRefLocate(ButtonRef, 50);

  const user = useRecoilValue(userState);

  return (
    <Container>
      <div />
      <StyledInput placeholder={`Search in ${user.nickname ?? 'workspace'}`} />
      <ImageButton
        customRef={ButtonRef}
        width={38}
        height={38}
        image=""
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
