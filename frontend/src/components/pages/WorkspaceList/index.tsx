import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import WorkSpaceListContent from '@organisms/WorkspaceListContent';
import WorkspaceListTemplate from '@templates/WorkspaceList';
import { replyToggleState } from '@state/workspace';
import { Container } from './styles';

const WorkspaceList = (): JSX.Element => {
  const setReplyToggleState = useResetRecoilState(replyToggleState);

  useEffect(() => {
    setReplyToggleState();
  }, []);

  return (
    <Container>
      <WorkspaceListTemplate>
        <WorkSpaceListContent />
      </WorkspaceListTemplate>
    </Container>
  );
};

export default WorkspaceList;
