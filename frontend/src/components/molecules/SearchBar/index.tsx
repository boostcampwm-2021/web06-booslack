import React from 'react';

import { BrowserChannelListSize } from '@enum/index';
import { Container, StyledViewportInput } from './styles';

interface Props {
  width?: number;
  height?: number;
  placeholder: undefined | string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const { height: ListHeight } = BrowserChannelListSize;

const SearchBar = ({
  width,
  height,
  placeholder,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <Container>
      <StyledViewportInput
        inputName="ChannelSearchBar"
        onSubmit={onSubmit}
        width={width}
        height={height || ListHeight}
        placeholder={placeholder || '검색어를 입력하세요'}
      />
    </Container>
  );
};

SearchBar.defaultProps = {
  width: undefined,
  height: undefined,
};

export default SearchBar;
