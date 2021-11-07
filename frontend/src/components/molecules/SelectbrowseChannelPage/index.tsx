import { browseCursor, browseCursorValue } from '@state/Channel';
import { pageLimitCount } from '@enum/index';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Container from './styles';

interface Props {
  dataCount: number;
}

const createSpan = (
  cursor: number,
  dataCount: number,
  setCursor: (arg0: number) => void,
): null | JSX.Element[] => {
  const divContainer = [];

  const leftSide = cursor - pageLimitCount >= 1 ? cursor - pageLimitCount : 1;

  for (
    let i = 0, count = leftSide;
    i < dataCount;
    i += pageLimitCount, count += 1
  ) {
    divContainer.push(count);
  }

  return divContainer.map((element: number) => {
    return (
      <button
        type="button"
        key={`browseCursor${element}`}
        onClick={() => setCursor(element)}
      >
        {element}
      </button>
    );
  });
};

const SelectbrowseChannelPage = ({ dataCount }: Props): JSX.Element => {
  const [cursor, setCursor] = useRecoilState(browseCursor);
  const cursorValue = useRecoilValue(browseCursorValue);
  const SpanContainer = createSpan(cursor, dataCount, setCursor);

  return (
    <Container>
      <button
        type="button"
        onClick={() => setCursor(cursor - 1 > 0 ? cursor - 1 : 1)}
      >
        {'<'}
      </button>
      {SpanContainer}
      <button
        type="button"
        onClick={() => {
          setCursor(
            cursorValue + pageLimitCount > dataCount ? cursor : cursor + 1,
          );
        }}
      >
        {'>'}
      </button>
    </Container>
  );
};

export default SelectbrowseChannelPage;
