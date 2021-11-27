import React from 'react';
import ThreadContent from '@molecules/ThreadContent';
import { useThreadQuery } from '@hook/useThreads';
import { IThread } from '@global/type';
import {
  StyledThreadContent,
  Container,
  RowDiv,
  AbsoluteLabel,
  GreyLine,
  MarginDiv,
} from './styles';
import ChatInputBar from '@organisms/ChatInputBar';

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

  const replyThreads = data?.reply;
  if (isReplyError) return <div>error</div>;

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
        <ChatInputBar />
        <MarginDiv />
      </Container>
    </>
  );
};

export default ReplyContent;
