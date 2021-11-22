import React from 'react';
import Container from './styles';

interface Props {
  text: string;
}

const DivLists = ({ text }: Props): JSX.Element => {
  return <Container>{text}</Container>;
};

export default DivLists;
