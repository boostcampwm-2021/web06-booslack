import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadContent from '@molecules/ThreadContent';
import { useThreadListQuery } from '@hook/useThreads';
import { Container, RowDiv, AbsoluteLabel, GreyLine } from './styles';

interface Props {
  threadId: string | number;
}

const ReplyContent = ({ threadId }: Props): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const { isLoading, isError, data: threads } = useThreadListQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Container>
        <RowDiv>
          {threads ? (
            <>
              <AbsoluteLabel text={`${threads?.length}개의 답글`} />
              <GreyLine />
            </>
          ) : null}
        </RowDiv>
        {threads.map((thread) => (
          <ThreadContent
            key={thread.id}
            nickname={thread?.userHasWorkspace?.nickname || '탈퇴한 유저'}
            message={thread?.message}
            createdTime={thread?.createdAt}
            threadId={thread?.id}
            userHasWorkspaceId={thread?.userHasWorkspaceId}
            isReply
          />
        ))}
      </Container>
    </>
  );
};

export default ReplyContent;
