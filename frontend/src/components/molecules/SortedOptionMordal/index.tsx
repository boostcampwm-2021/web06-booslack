import React, { RefObject, useEffect, useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { SortOption } from '@global/type';
import Container from './styles';

interface Props<T> {
  isSortOpened: boolean;
  usingAtom: RecoilState<T>;
  onClose: () => void;
  customRef: RefObject<HTMLElement>;
}

const SortedOptionMordal = ({
  isSortOpened,
  usingAtom,
  onClose,
  customRef,
}: Props<SortOption>): JSX.Element => {
  const sortOption = useSetRecoilState<SortOption>(usingAtom);

  const [xWidth, setWidth] = useState<null | number>(null);
  const [yHeight, setHeight] = useState<null | number>(null);

  const handleResize = () => {
    setWidth(customRef?.current?.getBoundingClientRect()?.x);
    setHeight(customRef?.current?.getBoundingClientRect()?.y);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Container
      x={xWidth}
      y={yHeight}
      customRef={customRef}
      isOpen={isSortOpened}
      onClose={onClose}
      zIndex={90}
    >
      <LabeledDefaultButton
        onClick={() => {
          sortOption('alpha');
        }}
        text="알파벳 순"
      />
      <LabeledDefaultButton
        onClick={() => {
          sortOption('rAlpha');
        }}
        text="알파벳 역순"
      />
    </Container>
  );
};

export default SortedOptionMordal;
