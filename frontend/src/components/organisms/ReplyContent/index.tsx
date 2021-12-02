import React from 'react';
import MessageContent from '@molecules/MessageContent';
import ChatInputBar from '@organisms/ChatInputBar';
import { useThreadQuery } from '@hook/useThreads';
import { postReplyAndFiles } from '@global/api/reply';
import { Message } from '@global/type';
import { useReplyListQuery } from '@hook/useReplys';
import {
  StyledMessageContent,
  Container,
  RowDiv,
  AbsoluteLabel,
  GreyLine,
  MarginDiv,
} from './styles';

interface Props {
  messageObject: Message;
}

const ReplyContent = ({ messageObject }: Props): JSX.Element => {
  const {
    isLoading: isReplyLoding,
    isError: isReplyError,
    data,
  } = useThreadQuery(messageObject.id);

  const {
    isLoading: isReplyListLoading,
    isError: isReplyListError,
    data: replyMessages,
  } = useReplyListQuery(messageObject.id);

  if (isReplyError || isReplyListError) return <div>error</div>;

  const onSendClick = async (
    sendable,
    userHasWorkspaceId,
    channelId,
    message,
    socket,
    setMessageClear,
    setMessage,
    selectedFile,
    setSelectedFile,
    setSelectedFileUrl,
    setShouldScrollDown,
  ) => {
    if (sendable) {
      await postReplyAndFiles(
        userHasWorkspaceId,
        messageObject.id,
        channelId,
        message,
        socket,
        setMessageClear,
        setMessage,
        selectedFile,
        setSelectedFile,
        setSelectedFileUrl,
        setShouldScrollDown,
      );
      setSelectedFile([]);
      setSelectedFileUrl([]);
    }
  };

  const ReplyList = () => {
    if (!isReplyListLoading) {
      return replyMessages?.map((reply: Message) => (
        <MessageContent key={reply.id} messageObject={reply} isInReplySide />
      ));
    }

    return <></>;
  };

  return (
    <>
      <Container>
        {isReplyLoding && !isReplyError && (
          <StyledMessageContent messageObject={messageObject} isInReplySide />
        )}
        {!isReplyLoding && !isReplyError && (
          <StyledMessageContent messageObject={data} isInReplySide />
        )}
        {!isReplyListLoading && (
          <RowDiv>
            <AbsoluteLabel text={`${replyMessages?.length ?? 0}개의 답글`} />
            <GreyLine />
          </RowDiv>
        )}
        <ReplyList />
        <ChatInputBar onSendClick={onSendClick} isReply={true} />
        <MarginDiv />
      </Container>
    </>
  );
};

export default ReplyContent;
