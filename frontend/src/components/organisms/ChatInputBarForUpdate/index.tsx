import React, { Dispatch, SetStateAction, useState } from 'react';
import WysiwygEditor from '@molecules/WysiwygEditor';
import Toolbar from './toolbar';
import { Container, WysiwygContainer, NotificationBar } from './styles';

interface Props {
  defaultMessage: string;
  threadId: string;
  setUpdateState: Dispatch<SetStateAction<boolean>>;
}

const ChatInputBarForUpdate = ({
  defaultMessage,
  threadId,
  setUpdateState,
}: Props): JSX.Element => {
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
          defaultMessage={defaultMessage}
        />
        <Toolbar
          threadId={threadId}
          message={message}
          focused={focused}
          setUpdateState={setUpdateState}
        />
      </WysiwygContainer>
      <NotificationBar />
    </Container>
  );
};

export default ChatInputBarForUpdate;
