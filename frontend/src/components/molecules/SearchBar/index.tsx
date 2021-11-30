import React from 'react';
import { Container, StyledViewportInput } from './styles';

interface Props {
  placeholder: undefined | string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ placeholder, onSubmit }: Props): JSX.Element => {
  return (
    <Container>
      <StyledViewportInput
        inputName="ChannelSearchBar"
        onSubmit={onSubmit}
        placeholder={placeholder || '검색어를 입력하세요'}
      />
    </Container>
  );
};

export default SearchBar;
