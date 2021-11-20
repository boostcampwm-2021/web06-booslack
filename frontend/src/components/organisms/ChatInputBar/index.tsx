import React from 'react';
import WysiwygEditor from './WysiwygEditor';
import { Container, WysiwygContainer, NotificationBar } from './styles';

const ChatInputBar = (): JSX.Element => {
  return (
    <Container>
      <WysiwygContainer>
        <WysiwygEditor></WysiwygEditor>
      </WysiwygContainer>
      <NotificationBar></NotificationBar>
    </Container>
  );
};

export default ChatInputBar;
