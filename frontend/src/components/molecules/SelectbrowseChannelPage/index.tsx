import { browseCursor, browseCursorValue } from '@state/Channel';
import { pageLimitCount } from '@enum/index';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Container from './styles';

interface Props {
  dataCount: number;
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
    cursorValue - pageNumber * pageLimitCount > 0 ? cursor - pageNumber : 1;

  for (
    let i = (leftSide - 1) * pageLimitCount, index = leftSide, count = 0;
    i <= dataCount && count < 10;
    i += pageLimitCount, index += 1, count += 1
  ) {
    divContainer.push(index);
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
  const SpanContainer = createSpan(cursor, cursorValue, dataCount, setCursor);

  const moveLeft = (): number => {
    return cursorValue - 10 * pageLimitCount > 0 ? cursor - pageNumber * 2 : 1;
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
