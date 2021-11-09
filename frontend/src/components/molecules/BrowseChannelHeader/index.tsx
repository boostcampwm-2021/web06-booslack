import React from 'react';
import { Container } from './styles';

interface Props {
  width: number;
  title: JSX.Element;
  content?: null | JSX.Element;
  rightButton: JSX.Element;
}

const BrowseChannelHeader = ({
  width,
  title,
  content,
  rightButton,
}: Props): JSX.Element => {
  return (
    <Container width={width}>
      {title}
      {content}
      {rightButton}
    </Container>
  );
};

BrowseChannelHeader.defaultProps = {
  content: <></>,
};

export default BrowseChannelHeader;
