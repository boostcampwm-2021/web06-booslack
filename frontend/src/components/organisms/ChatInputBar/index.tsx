import React, { useState } from 'react';
import WysiwygEditor from './WysiwygEditor';
import Toolbar from './toolbar';
import { Container, WysiwygContainer, NotificationBar } from './styles';

const ChatInputBar = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <WysiwygContainer>
        <WysiwygEditor setMessage={setMessage} setFocused={setFocused} />
        <Toolbar message={message} focused={focused} />
      </WysiwygContainer>
      <NotificationBar />
    </Container>
  );
};

export default ChatInputBar;
