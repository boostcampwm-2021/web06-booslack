import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadContent from '@molecules/ThreadContent';
import { useThreadListQuery } from '@hook/useThreads';
import { IThread } from '@global/type';
import { Container } from './styles';

interface Props {
  inputBar: JSX.Element;
  channelName: string[];
}

const ChatContent = ({ inputBar, channelName }: Props): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const { isLoading, isError, data: threads } = useThreadListQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Container>
        {threads.map((thread: IThread) => (
          <ThreadContent
            key={thread.id}
            thread={thread}
            channelName={channelName}
          />
        ))}
      </Container>
      {inputBar}
    </>
  );
};

export default ChatContent;
