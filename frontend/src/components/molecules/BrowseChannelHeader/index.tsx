import React from 'react';
import { Container } from './styles';

interface Props<T> {
  width?: number;
  title: JSX.Element;
  content?: null | JSX.Element;
  rightButton: JSX.Element;
  className?: T;
}

const BrowseChannelHeader = ({
  width = null,
  title,
  content,
  rightButton,
  className,
}: Props<typeof className>): JSX.Element => {
  return (
    <Container width={width} className={className}>
      {title}
      {content}
      {rightButton}
    </Container>
  );
};

BrowseChannelHeader.defaultProps = {
  width: null,
  content: <></>,
  className: {},
};

export default BrowseChannelHeader;
