import WorkspaceChatHeader from '@molecules/WorkspaceChatHeader';
import WorkspaceChatInput from '@molecules/WorkspaceChatInput';
import WorkspaceChatContent from '@molecules/WorkspaceChatContent';
import React, { useMemo } from 'react';
import { Container } from './style';

const WorkspaceContent = (): JSX.Element => {
  const inputBar = useMemo(() => <WorkspaceChatInput />, []);

  return (
    <Container>
      <WorkspaceChatHeader />
      <WorkspaceChatContent inputBar={inputBar} />
    </Container>
  );
};

export default WorkspaceContent;
