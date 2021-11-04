import ChatInput from '@molecules/ChatInput';
import { ChatInputSize } from '@enum';
import React, { useMemo } from 'react';
import { Container } from './styles';

const ChatInputBackGround = (): JSX.Element => {
  const { width, height } = useMemo(() => {
    return ChatInputSize;
  }, []);

  return (
    <Container width={width} height={height}>
      <ChatInput width={width} height={height} />
    </Container>
  );
};

export default ChatInputBackGround;
