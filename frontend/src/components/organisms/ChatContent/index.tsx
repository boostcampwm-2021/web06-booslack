import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ThreadContent from '@molecules/ThreadContent';
import { usePartialThreadListQuery } from '@hook/useThreads';
import { IThread } from '@global/type';
import { useRecoilState } from 'recoil';
import { shouldScrollDownState } from '@state/thread';
import { Container } from './styles';

interface Props {
  inputBar: JSX.Element;
  channelName: string[];
}

const ChatContent = ({ inputBar, channelName }: Props): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const [shouldScrollDown, setShouldScrollDown] = useRecoilState(
    shouldScrollDownState,
  );

  const bottomRef = useRef(null);
  const currentRef = useRef(null);
  const previousRef = useRef(null);

  const {
    isLoading,
    isError,
    fetchPreviousPage,
    hasPreviousPage,
    data: threads,
  } = usePartialThreadListQuery(channelId);

  useEffect(() => {
    if (shouldScrollDown) {
      bottomRef.current?.scrollIntoView({ block: 'end' });
      setShouldScrollDown(false);
    }

    if (!threads || !hasPreviousPage) return undefined;
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasPreviousPage) {
          previousRef.current = currentRef.current.firstChild;
          fetchPreviousPage();
        }
      }),
    );

    observer.observe(currentRef.current.firstChild);
    return () => {
      observer.disconnect();
      previousRef.current?.scrollIntoView({ block: 'nearest' });
    };
  }, [threads, hasPreviousPage]);

  useEffect(() => {
    if (isLoading) return;
    bottomRef.current?.scrollIntoView({ block: 'end' });
  }, [isLoading]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Container ref={currentRef}>
        {threads.pages.flat().map((thread: IThread) => (
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
