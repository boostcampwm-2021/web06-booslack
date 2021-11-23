import React, { useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import ImageButton from '@atoms/ImageButton';
import useRefLocate from '@hook/useRefLocate';
import defaultProfile from '@global/image/default_account.png';
import { useWorkspaceQuery } from '@hook/useWorkspace';
import WorkspaceHeaderMenuList from './WorkspaceHeaderMenuList';
import { StyledInput, Container, StyledNoOverlayModal } from './styles';

const WorkspaceHeader = (): JSX.Element => {
  const ButtonRef = useRef(null);
  const [modalState, setModalState] = useState(false);

  const [xWidth, yHeight] = useRefLocate(ButtonRef, 50);

  const { workspaceId }: { workspaceId: string } = useParams();
  const { data } = useWorkspaceQuery(workspaceId);

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
      <StyledInput placeholder={`Search in ${data?.name ?? 'workspace'}`} />
      <Profile />
      <StyledNoOverlayModal
        xWidth={xWidth - 160}
        yHeight={yHeight + 50}
        isOpened={modalState}
        onClose={() => setModalState(false)}
        customRef={ButtonRef}
      >
        <WorkspaceHeaderMenuList />
      </StyledNoOverlayModal>
    </Container>
  );
};

export default WorkspaceHeader;
