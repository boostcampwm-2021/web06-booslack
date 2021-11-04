import ViewportInput from '@atoms/ViewPortInput';
import { BrowserChannelListSize } from '@enum/index';
import React from 'react';
import { Container } from './styles';

interface Props {
  width?: number;
  height?: number;
  placeholder?: string;
}

const { width: ListWidth, height: ListHeight } = BrowserChannelListSize;

const SearchBar = ({ width, height, placeholder }: Props): JSX.Element => {
  return (
    <Container>
      <ViewportInput
        width={width || ListWidth}
        height={height || ListHeight}
        placeholder={placeholder || '검색어를 입력하세요'}
      />
    </Container>
  );
};

export default SearchBar;
