import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { replyToggleState } from '@state/workspace';
import ChatInputBarForUpdate from '@organisms/ChatInputBarForUpdate';
import ReactionBar from '@organisms/ReactionBar';
import { userProfileModalState } from '@state/modal';
import defaultPerson from '@global/image/default_account.png';
import { IThread } from '@global/type';
import { transfromDate } from '@global/util/transfromDate';
import ThreadActions from './ThreadActions';
import ThreadFileStatusBar from './ThreadFileStatusBar';
import {
  Container,
  MessageKit,
  MessageKitLeft,
  MessageKitRight,
  MessageSender,
  MessageTimestamp,
  MessageText,
  ReplyButton,
  ThreadImageButton,
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
    files,
  } = thread;

  const nickname = userHasWorkspace?.nickname || '탈퇴한 유저';

  const setIsUserProfileModalOpen = useSetRecoilState(userProfileModalState);
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
      <MessageTimestamp>{transfromDate(createdTime)}</MessageTimestamp>
      <br />
      <MessageText dangerouslySetInnerHTML={{ __html: message }} />
      {reactionList?.length > 0 && (
        <ReactionBar isReply={isReply} reactionList={reactionList} />
      )}
      {!isReply && replyList?.length > 0 && (
        <ReplyButton
          onClick={() => replyToggle({ isOpened: true, thread, channelName })}
          text={`${replyList?.length}개의 댓글`}
        />
      )}
      {files?.length > 0 ? <ThreadFileStatusBar files={files} /> : <></>}
    </>
  );

  const updateMessage = (
    <ChatInputBarForUpdate
      threadId={threadId}
      defaultMessage={message}
      setUpdateState={setUpdateState}
      isReply={isReply}
    />
  );

  return (
    <Container
      className={className}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      updateState={updateState}
    >
      <MessageKit className={updateState && 'updating'}>
        <MessageKitLeft>
          <ThreadImageButton
            onClick={(e) => {
              if (!userHasWorkspace) return;
              setIsUserProfileModalOpen({
                isOpen: true,
                userHasWorkspace,
                x: e.clientX,
                y: e.clientY,
              });
            }}
            image={
              userHasWorkspace && userHasWorkspace?.fileUrl
                ? userHasWorkspace?.fileUrl
                : defaultPerson
            }
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
