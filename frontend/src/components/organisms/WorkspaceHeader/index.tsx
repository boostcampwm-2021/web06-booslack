import React, { useMemo, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import ImageButton from '@atoms/ImageButton';
import useRefLocate from '@hook/useRefLocate';
import { selectedWorkspaceState } from '@state/workspace';
import defaultProfile from '@global/image/default_account.png';
import WorkspaceHeaderMenuList from './WorkspaceHeaderMenuList';
import { StyledInput, Container, StyledNoOverlayModal } from './styles';

const WorkspaceHeader = (): JSX.Element => {
  const ButtonRef = useRef(null);
  const [modalState, setModalState] = useState(false);

  const [xWidth, yHeight] = useRefLocate(ButtonRef, 50);

  const workspaceName = useRecoilValue(selectedWorkspaceState);

  const Profile = () => {
    return useMemo(
      () => (
        <ImageButton
          customRef={ButtonRef}
          width={38}
          height={38}
          image={defaultProfile}
          onClick={() => setModalState(true)}
        />
      ),
      [],
    );
  };

  return (
    <Container>
      <div />
      <StyledInput placeholder={`Search in ${workspaceName ?? 'workspace'}`} />
      <Profile />
      <StyledNoOverlayModal
        xWidth={xWidth - 260}
        yHeight={yHeight + 50}
        isOpened={modalState}
        onClose={() => setModalState(false)}
        customRef={ButtonRef}
      >
        <WorkspaceHeaderMenuList Profile={Profile} />
      </StyledNoOverlayModal>
    </Container>
  );
};

export default WorkspaceHeader;
