import React, { useState } from 'react';
import ImageButton from '@atoms/ImageButton';
import ChatInputBarForUpdate from '@organisms/ChatInputBarForUpdate';
import defaultPerson from '@global/image/default_account.png';
import ThreadActions from './ThreadActions';
import {
  Container,
  MessageKit,
  MessageKitLeft,
  MessageKitRight,
  MessageSender,
  MessageTimestamp,
  MessageText,
  ReplyButton,
} from './styles';

interface Props {
  nickname: string;
  message: string;
  createdTime: string;
  threadId: string;
  userHasWorkspaceId: string;
  replyList: unknown[];
}

const ThreadContent = ({
  nickname,
  message,
  createdTime,
  threadId,
  userHasWorkspaceId,
  replyList,
}: Props): JSX.Element => {
  const [updateState, setUpdateState] = useState(false);
  const [hoverState, setHoverState] = useState(false);
  const handleHoverIn = () => {
    if (!updateState) {
      setHoverState(true);
    }
  };
  const handleHoverOut = () => {
    if (!updateState) {
      setHoverState(false);
    }
  };

  const ordinaryMessage = (
    <>
      <MessageSender>{nickname}</MessageSender>
      &nbsp; &nbsp;
      <MessageTimestamp>{createdTime}</MessageTimestamp>
      <br />
      <MessageText dangerouslySetInnerHTML={{ __html: message }} />
      <ReplyButton text={`${replyList.length}개의 댓글`} />
    </>
  );

  const updateMessage = (
    <ChatInputBarForUpdate
      threadId={threadId}
      defaultMessage={message}
      setUpdateState={setUpdateState}
    />
  );

  return (
    <Container
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      updateState={updateState}
    >
      <MessageKit>
        <MessageKitLeft>
          <ImageButton
            onClick={() => {}}
            height={36}
            width={36}
            image={defaultPerson}
          />
        </MessageKitLeft>
        <MessageKitRight>
          {updateState ? updateMessage : ordinaryMessage}
        </MessageKitRight>
      </MessageKit>
      {hoverState && !updateState && (
        <ThreadActions
          threadId={threadId}
          userHasWorkspaceId={userHasWorkspaceId}
          setUpdateState={setUpdateState}
        />
      )}
    </Container>
  );
};

export default ThreadContent;
