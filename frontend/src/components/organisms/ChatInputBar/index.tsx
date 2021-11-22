import React, { useState } from 'react';
import WysiwygEditor from './WysiwygEditor';
import Toolbar from './toolbar';
import { Container, WysiwygContainer, NotificationBar } from './styles';

const ChatInputBar = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const [messageClear, setMessageClear] = useState(false);

  return (
    <Container>
      <WysiwygContainer>
        <WysiwygEditor
          setMessage={setMessage}
          setFocused={setFocused}
          messageClear={messageClear}
          setMessageClear={setMessageClear}
        />
        <Toolbar
          message={message}
          setMessageClear={setMessageClear}
          focused={focused}
        />
      </WysiwygContainer>
      <NotificationBar />
    </Container>
  );
};

export default ChatInputBar;
