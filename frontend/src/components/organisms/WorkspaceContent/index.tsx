import ChatHeader from '@molecules/ChatHeader';
import ChatInputBackground from '@organisms/ChatInputBackground';
import ChatContent from '@organisms/ChatContent';
import React, { useMemo } from 'react';
import { Container } from './style';

const WorkspaceContent = (): JSX.Element => {
  const inputBar = useMemo(() => <ChatInputBackground />, []);

  return (
    <Container>
      <ChatHeader />
      <ChatContent inputBar={inputBar} />
    </Container>
  );
};

export default WorkspaceContent;
