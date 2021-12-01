import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MessageContent from '@molecules/MessageContent';
import { usePartialThreadListQuery } from '@hook/useThreads';
import { Message } from '@global/type';
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
    data: messages,
  } = usePartialThreadListQuery(channelId);

  useEffect(() => {
    if (shouldScrollDown) {
      bottomRef.current?.scrollIntoView({ block: 'end' });
      setShouldScrollDown(false);
    }

    if (!messages || !hasPreviousPage) return undefined;
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
  }, [messages, hasPreviousPage]);

  useEffect(() => {
    if (isLoading) return;
    bottomRef.current?.scrollIntoView({ block: 'end' });
  }, [isLoading]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Container ref={currentRef}>
        {messages.pages.flat().map((message: Message) => (
          <MessageContent
            key={message.id}
            messageObject={message}
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
