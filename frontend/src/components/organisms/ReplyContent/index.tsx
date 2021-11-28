import React from 'react';
import ThreadContent from '@molecules/ThreadContent';
import ChatInputBar from '@organisms/ChatInputBar';
import { useThreadQuery } from '@hook/useThreads';
import { postReplyAndFiles } from '@global/api/reply';
import { IThread } from '@global/type';
import { useReplyListQuery } from '@hook/useReplys';

import {
  StyledThreadContent,
  Container,
  RowDiv,
  AbsoluteLabel,
  GreyLine,
  MarginDiv,
} from './styles';

interface Props {
  thread: IThread;
  threadId: string | number;
}

const ReplyContent = ({ thread, threadId }: Props): JSX.Element => {
  const {
    isLoading: isReplyLoding,
    isError: isReplyError,
    data,
  } = useThreadQuery(threadId as string);

  const {
    isLoading,
    isError,
    data: replyThreads,
  } = useReplyListQuery(threadId as string);

  console.log(data);

  // reply 에 s 붙여야 되는데 지금은 터짐. 쿼리문을 수정해야함
  if (isReplyError) return <div>error</div>;

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
        threadId,
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

  return (
    <>
      <Container>
        {isReplyLoding && !isReplyError && (
          <StyledThreadContent thread={thread} isReply />
        )}
        {!isReplyLoding && !isReplyError && (
          <StyledThreadContent thread={data} isReply />
        )}
        {replyThreads?.length > 0 && (
          <RowDiv>
            <AbsoluteLabel text={`${replyThreads?.length0}개의 답글`} />
            <GreyLine />
          </RowDiv>
        )}
        {replyThreads?.map((reply: IThread) => (
          <ThreadContent key={`thread${reply.id}`} thread={reply} isReply />
        ))}
        <ChatInputBar onSendClick={onSendClick} />
        <MarginDiv />
      </Container>
    </>
  );
};

export default ReplyContent;
