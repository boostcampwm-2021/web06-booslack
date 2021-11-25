import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadContent from '@molecules/ThreadContent';
import { useThreadListQuery } from '@hook/useThreads';
import { Container } from './styles';

interface Props {
  inputBar: JSX.Element;
}

const ChatContent = ({ inputBar }: Props): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const { isLoading, isError, data: threads } = useThreadListQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Container>
        {threads.map((thread) => (
          <ThreadContent
            key={thread.id}
            nickname={thread?.userHasWorkspace?.nickname || '탈퇴한 유저'}
            message={thread?.message}
            createdTime={thread?.createdAt}
            threadId={thread?.id}
            userHasWorkspaceId={thread?.userHasWorkspaceId}
            replyList={thread.replys}
            reactionList={thread.reactions}
          />
        ))}
      </Container>
      {inputBar}
    </>
  );
};

export default ChatContent;
