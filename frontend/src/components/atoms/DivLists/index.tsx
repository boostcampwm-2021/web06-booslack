import React from 'react';
import Container from './styles';

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

const DivLists = ({ text, onClick, className }: Props): JSX.Element => {
  return (
    <Container onClick={onClick} className={className}>
      {text}
    </Container>
  );
};

DivLists.defaultProps = {
  className: '',
};

export default DivLists;
