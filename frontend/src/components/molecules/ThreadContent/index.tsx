import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import ImageButton from '@atoms/ImageButton';
import { replyToggleState } from '@state/workspace';
import ChatInputBarForUpdate from '@organisms/ChatInputBarForUpdate';
import ReactionBar from '@organisms/ReactionBar';
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
  channelName: string[];
  replyList: unknown[];
  reactionList: unknown[];
}

const ThreadContent = ({
  nickname,
  message,
  createdTime,
  threadId,
  userHasWorkspaceId,
  replyList,
  reactionList,
  channelName,
}: Props): JSX.Element => {
  const [updateState, setUpdateState] = useState(false);
  const [hoverState, setHoverState] = useState(false);
  const replyToggle = useSetRecoilState(replyToggleState);
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
      {reactionList.length > 0 && <ReactionBar reactionList={reactionList} />}
      {replyList.length > 0 && (
        <ReplyButton
        onClick={() => replyToggle({ isOpened: true, threadId, channelName })}
          text={`${replyList.length}개의 댓글`}
        />
      )}
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
          channelName={channelName}
          userHasWorkspaceId={userHasWorkspaceId}
          setUpdateState={setUpdateState}
        />
      )}
    </Container>
  );
};

export default ThreadContent;
