import React from 'react';
import { Container } from './styles';

interface Props {
  inputBar: JSX.Element;
}

const ChatContent = ({ inputBar }: Props): JSX.Element => {
  return <Container>{inputBar}</Container>;
};

export default ChatContent;
