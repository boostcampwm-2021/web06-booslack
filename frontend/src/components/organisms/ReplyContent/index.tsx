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
    isLoading: isReplyListLoading,
    isError: isReplyListError,
    data: replyThreads,
  } = useReplyListQuery(threadId as string);

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

  const ReplyList = () => {
    if (!isReplyListLoading) {
      return replyThreads?.map((reply: IThread) => (
        <ThreadContent key={`thread${reply.id}`} thread={reply} isReply />
      ));
    }

    return <></>;
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
        {!isReplyListLoading && (
          <RowDiv>
            <AbsoluteLabel text={`${replyThreads?.length ?? 0}개의 답글`} />
            <GreyLine />
          </RowDiv>
        )}
        <ReplyList />
        <ChatInputBar onSendClick={onSendClick} />
        <MarginDiv />
      </Container>
    </>
  );
};

export default ReplyContent;
