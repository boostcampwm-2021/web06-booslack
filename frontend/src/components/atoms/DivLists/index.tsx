import React from 'react';
import Container from './styles';

interface Props {
  text: string;
  onClick: () => void;
}

const DivLists = ({ text, onClick }: Props): JSX.Element => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default DivLists;
