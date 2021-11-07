import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { SortOption } from '@global/type';
import React from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import Container from './styles';

interface Props<T> {
  isOpened: boolean;
  usingAtom: RecoilState<T>;
}

const SortedOptionMordal = ({
  isOpened,
  usingAtom,
}: Props<SortOption>): JSX.Element => {
  const sortOption = useSetRecoilState<SortOption>(usingAtom);

  return (
    <Container isOpen={isOpened}>
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
