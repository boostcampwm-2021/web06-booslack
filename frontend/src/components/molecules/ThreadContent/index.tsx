import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import ImageButton from '@atoms/ImageButton';
import { replyToggleState } from '@state/workspace';
import ChatInputBarForUpdate from '@organisms/ChatInputBarForUpdate';
import ReactionBar from '@organisms/ReactionBar';
import defaultPerson from '@global/image/default_account.png';
import { IThread } from '@global/type';
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
  thread: IThread;
  channelName?: string[];
  isReply?: boolean;
  className?: string;
}

const ThreadContent = ({
  thread,
  channelName,
  isReply,
  className,
}: Props): JSX.Element => {
  const {
    userHasWorkspace,
    message,
    createdAt: createdTime,
    id: threadId,
    userHasWorkspaceId,
    replys: replyList,
    reactions: reactionList,
  } = thread;

  const nickname = userHasWorkspace?.nickname || '탈퇴한 유저';

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
  // console.log(replyList);
  const ordinaryMessage = (
    <>
      <MessageSender>{nickname}</MessageSender>
      &nbsp; &nbsp;
      <MessageTimestamp>{createdTime}</MessageTimestamp>
      <br />
      <MessageText dangerouslySetInnerHTML={{ __html: message }} />
      {reactionList.length > 0 && <ReactionBar reactionList={reactionList} />}
      {!isReply && replyList.length > 0 && (
        <ReplyButton
          onClick={() => replyToggle({ isOpened: true, thread, channelName })}
          text={`${replyList?.length}개의 댓글`}
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
      className={className}
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
          thread={thread}
          isReply={isReply}
          threadId={threadId}
          channelName={channelName}
          userHasWorkspaceId={userHasWorkspaceId}
          setUpdateState={setUpdateState}
        />
      )}
    </Container>
  );
};

ThreadContent.defaultProps = {
  channelName: undefined,
  isReply: false,
  className: '',
};

export default ThreadContent;
