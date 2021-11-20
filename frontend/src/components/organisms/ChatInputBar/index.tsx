import React from 'react';
import WysiwygEditor from './WysiwygEditor';
import Toolbar from './toolbar';
import { Container, WysiwygContainer, NotificationBar } from './styles';

const ChatInputBar = (): JSX.Element => {
  return (
    <Container>
      <WysiwygContainer>
        <WysiwygEditor />
        <Toolbar />
      </WysiwygContainer>
      <NotificationBar />
    </Container>
  );
};

export default ChatInputBar;
