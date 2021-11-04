import ThreadContent from '@molecules/ThreadContent';
import React from 'react';
import { Container } from './styles';

interface Props {
  inputBar: JSX.Element;
}

const ChatContent = ({ inputBar }: Props): JSX.Element => {
  const ThreadContents = new Array(100).fill(null).map((value, index) => {
    return <ThreadContent firstLabelContent={`user ${index}`} key={index} />; //key 나중 반드시 바꾸세요.
  });

  return (
    <>
      <Container>{ThreadContents}</Container>
      {inputBar}
    </>
  );
};

export default ChatContent;
