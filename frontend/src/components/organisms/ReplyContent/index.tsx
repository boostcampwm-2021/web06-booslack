import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadContent from '@molecules/ThreadContent';
import { useThreadQuery, useThreadListQuery } from '@hook/useThreads';
import { IThread } from '@global/type';

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
  const { channelId }: { channelId: string } = useParams();

  const {
    isLoading,
    isError,
    data: replyThreads,
  } = useThreadListQuery(channelId);

  const {
    isLoading: isReplyLoding,
    isError: isReplyError,
    data: replyThread,
  } = useThreadQuery(threadId as string);

  console.log(replyThread);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Container>
        {isReplyLoding && !isReplyError && (
          <StyledThreadContent thread={thread} isReply />
        )}
        {!isReplyLoding && !isReplyError && (
          <StyledThreadContent thread={replyThread} isReply />
        )}
        <RowDiv>
          {replyThreads ? (
            <>
              <AbsoluteLabel text={`${replyThreads?.length}개의 답글`} />
              <GreyLine />
            </>
          ) : null}
        </RowDiv>
        {replyThreads.map((reply: IThread) => (
          <ThreadContent key={`thread${reply.id}`} thread={reply} isReply />
        ))}
        input bar here
        <MarginDiv />
      </Container>
    </>
  );
};

export default ReplyContent;
