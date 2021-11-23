import React, { useEffect, useRef } from 'react';
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
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const { isLoading, isError, data: threads } = useThreadListQuery(channelId);

  useEffect(() => {
    if (!threads) return;

    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // fetch
        }
      }),
    );
    observer.observe(topRef.current);
  }, [threads]);

  // on every new message
  useEffect(() => {
    if (!threads) return;
    bottomRef.current?.scrollIntoView({ block: 'end' });
  }, [threads]);

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
        <div ref={bottomRef} />
      </Container>
      {inputBar}
    </>
  );
};

export default ChatContent;
