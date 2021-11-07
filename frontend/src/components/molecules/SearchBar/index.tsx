import ViewportInput from '@atoms/ViewPortInput';
import { BrowserChannelListSize } from '@enum/index';
import React from 'react';
import { Container } from './styles';

interface Props {
  width: number;
  height: number;
  placeholder: undefined | string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const { width: ListWidth, height: ListHeight } = BrowserChannelListSize;

const SearchBar = ({
  width,
  height,
  placeholder,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <Container>
      <ViewportInput
        inputName="ChannelSearchBar"
        onSubmit={onSubmit}
        width={width || ListWidth}
        height={height || ListHeight}
        placeholder={placeholder || '검색어를 입력하세요'}
      />
    </Container>
  );
};

export default SearchBar;
