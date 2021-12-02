import React, { Dispatch, SetStateAction, useState } from 'react';
import { useParams } from 'react-router-dom';
import WysiwygEditor from '@molecules/WysiwygEditor';
import { updateReply } from '@global/api/reply';
import { updateMessage } from '@global/api/thread';
import { useRecoilState, useRecoilValue } from 'recoil';
import userState from '@state/user';
import { replyToggleState } from '@state/workspace';
import Toolbar from './toolbar';
import { Container, WysiwygContainer, NotificationBar } from './styles';

interface Props {
  defaultMessage: string;
  messageId: string;
  isReply: boolean;
  setUpdateState: Dispatch<SetStateAction<boolean>>;
}

const ChatInputBarForUpdate = ({
  defaultMessage,
  messageId,
  isReply,
  setUpdateState,
}: Props): JSX.Element => {
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const [messageClear, setMessageClear] = useState(false);
  const user = useRecoilValue(userState);
  const { channelId }: { channelId: string } = useParams();
  const [replyToggle] = useRecoilState(replyToggleState);

  const updateRequest = () => {
    if (isReply) {
      updateReply(
        messageId,
        replyToggle?.message.id,
        channelId,
        message,
        user.socket,
        setUpdateState,
      );
    } else {
      updateMessage(messageId, channelId, message, user.socket, setUpdateState);
    }
  };

  return (
    <Container>
      <WysiwygContainer>
        <WysiwygEditor
          setMessage={setMessage}
          setFocused={setFocused}
          messageClear={messageClear}
          setMessageClear={setMessageClear}
          defaultMessage={defaultMessage}
          onSendClick={updateRequest}
        />
        <Toolbar
          message={message}
          focused={focused}
          onSendClick={updateRequest}
        />
      </WysiwygContainer>
      <NotificationBar />
    </Container>
  );
};

export default ChatInputBarForUpdate;
