import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadContent from '@molecules/ThreadContent';
import { useThreadListQuery } from '@hook/useThreads';
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

  const { isLoading, isError, data: threads } = useThreadListQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Container>
        <StyledThreadContent
          key={`focusedThread${thread.id}`}
          thread={thread}
          isReply
        />
        <RowDiv>
          {threads ? (
            <>
              <AbsoluteLabel text={`${threads?.length}개의 답글`} />
              <GreyLine />
            </>
          ) : null}
        </RowDiv>
        {threads.map((replyThread: IThread) => (
          <ThreadContent
            key={`thread${replyThread.id}`}
            thread={replyThread}
            isReply
          />
        ))}
        input bar here
        <MarginDiv />
      </Container>
    </>
  );
};

export default ReplyContent;
