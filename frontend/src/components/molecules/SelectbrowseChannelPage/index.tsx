import React from 'react';
import { pageLimitCount } from '@enum/index';
import Container from './styles';

interface Props {
  dataCount: number;
  cursor: number;
  setCursor: (number) => void;
}

const pageNumber = 5;

const createSpan = (
  cursor: number,
  cursorValue: number,
  dataCount: number,
  setCursor: (arg0: number) => void,
): null | JSX.Element[] => {
  const divContainer = [];

  // eslint-disable-next-line operator-linebreak
  const leftSide =
    cursorValue - pageNumber * pageLimitCount > 0 ? cursor - pageNumber + 1 : 1;

  for (
    let i = (leftSide - 1) * pageLimitCount, index = leftSide, count = 0;
    i < dataCount && count < 10;
    i += pageLimitCount, index += 1, count += 1
  ) {
    divContainer.push(index);
  }

  return divContainer.map((element: number) => {
    return (
      <button
        type="button"
        key={`browseCursor${element - 1}`}
        onClick={() => setCursor(element - 1)}
      >
        {element}
      </button>
    );
  });
};

const SelectbrowseChannelPage = ({
  dataCount,
  cursor,
  setCursor,
}: Props): JSX.Element => {
  const cursorValue = (cursor - 1) * pageLimitCount;
  const SpanContainer = createSpan(cursor, cursorValue, dataCount, setCursor);

  const moveLeft = (): number => {
    return cursorValue - 10 * pageLimitCount > 0 ? cursor - pageNumber * 2 : 0;
  };

  const moveRight = (): number => {
    return cursorValue + 10 * pageLimitCount < dataCount
      ? cursor + pageNumber * 2
      : cursor;
  };

  return (
    <Container>
      <button type="button" onClick={() => setCursor(moveLeft())}>
        {'<'}
      </button>
      {SpanContainer}
      <button
        type="button"
        onClick={() => {
          setCursor(moveRight());
        }}
      >
        {'>'}
      </button>
    </Container>
  );
};

export default SelectbrowseChannelPage;
