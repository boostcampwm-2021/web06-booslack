import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { replyToggleState } from '@state/workspace';
import ChatInputBarForUpdate from '@organisms/ChatInputBarForUpdate';
import ReactionBar from '@organisms/ReactionBar';
import { userProfileModalState } from '@state/modal';
import defaultPerson from '@global/image/default_account.png';
import { Message } from '@global/type';
import axios from 'axios';
import { transfromDate } from '@global/util/transfromDate';
import MessageActions from './MessageActions';
import MessageFileStatusBar from './MessageFileStatusBar';
import {
  Container,
  MessageKit,
  MessageKitLeft,
  MessageKitRight,
  MessageSender,
  MessageTimestamp,
  MessageText,
  ReplyButton,
  MessageImageButton,
} from './styles';

interface Props {
  messageObject: Message;
  channelName?: string[];
  className?: string;
  isInReplySide?: boolean;
}

const MessageContent = ({
  messageObject,
  channelName,
  className,
  isInReplySide,
}: Props): JSX.Element => {
  const {
    userHasWorkspace,
    message,
    createdAt,
    id,
    userHasWorkspaceId,
    replys,
    reactions,
    files,
  } = messageObject;

  const nickname = userHasWorkspace?.nickname || '탈퇴한 유저';

  const setIsUserProfileModalOpen = useSetRecoilState(userProfileModalState);
  const [updateState, setUpdateState] = useState(false);
  const [hoverState, setHoverState] = useState(false);
  const [fileUrl, setFileUrl] = useState(defaultPerson);
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
  const setReplyToggle = useSetRecoilState(replyToggleState);
  const isReply = messageObject.threadId !== undefined;

  const ordinaryMessage = (
    <>
      <MessageSender>{nickname}</MessageSender>
      &nbsp; &nbsp;
      <MessageTimestamp>{transfromDate(createdAt)}</MessageTimestamp>
      <br />
      <MessageText dangerouslySetInnerHTML={{ __html: message }} />
      {reactions?.length > 0 && (
        <ReactionBar isReply={isReply} reactions={reactions} />
      )}
      {!isInReplySide && replys?.length > 0 && (
        <ReplyButton
          onClick={() =>
            setReplyToggle({
              isOpened: true,
              message: messageObject,
              channelName,
            })
          }
          text={`${replys?.length}개의 댓글`}
        />
      )}
      {files?.length > 0 ? <MessageFileStatusBar files={files} /> : <></>}
    </>
  );

  const updateMessage = (
    <ChatInputBarForUpdate
      messageId={id}
      defaultMessage={message}
      setUpdateState={setUpdateState}
      isReply={isReply}
    />
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(async () => {
    const res = await axios.get(
      `/api/files/userhasworkspace/${userHasWorkspaceId}`,
    );
    if (
      res?.data.files &&
      res?.data.files.url &&
      res?.data.files.url !== fileUrl
    ) {
      setFileUrl(res?.data.files.url);
    }
  }, []);

  return (
    <Container
      className={className}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      updateState={updateState}
    >
      <MessageKit className={updateState && 'updating'}>
        <MessageKitLeft>
          <MessageImageButton
            onClick={(e) => {
              setIsUserProfileModalOpen({
                isOpen: true,
                userHasWorkspace,
                x: e.clientX,
                y: e.clientY,
              });
            }}
            image={fileUrl}
          />
        </MessageKitLeft>
        <MessageKitRight>
          {updateState ? updateMessage : ordinaryMessage}
        </MessageKitRight>
      </MessageKit>
      {hoverState && !updateState && (
        <MessageActions
          messageObject={messageObject}
          channelName={channelName}
          setUpdateState={setUpdateState}
        />
      )}
    </Container>
  );
};

MessageContent.defaultProps = {
  channelName: undefined,
  className: '',
  isInReplySide: false,
};

export default MessageContent;
