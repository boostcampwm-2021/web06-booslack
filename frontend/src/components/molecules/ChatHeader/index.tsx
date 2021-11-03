import Label from '@atoms/Label';
import React from 'react';
import Container from './styles';

const ChatHeader = (): JSX.Element => {
  return (
    <Container>
      <Label text="# channel name"></Label>
      <Label text="channel explain "></Label>
    </Container>
  );
};

export default ChatHeader;
