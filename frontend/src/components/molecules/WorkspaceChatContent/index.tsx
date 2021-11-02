import React from 'react';
import { Container } from './styles';

interface Props {
  inputBar: JSX.Element;
}

const WorkspaceChatContent = ({ inputBar }: Props): JSX.Element => {
  return <Container>{inputBar}</Container>;
};

export default WorkspaceChatContent;
