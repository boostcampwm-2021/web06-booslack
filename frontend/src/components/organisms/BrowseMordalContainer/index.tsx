import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import SortedOptionMordal from '@molecules/SortedOptionMordal';
import { browseChannelSortOption } from '@state/Channel';

import Container from './styles';

interface Props {
  setPage: Dispatch<SetStateAction<number>>;
}

const BrowseMordalContainer = ({ setPage }: Props): JSX.Element => {
  const [isOpenedSortedModal, setSortedModal] = useState<boolean>(false);
  const locationRef = useRef();

  return (
    <Container>
      <SortedOptionMordal
        onClose={() => {
          setSortedModal(false);
        }}
        setPage={setPage}
        isSortOpened={isOpenedSortedModal}
        usingAtom={browseChannelSortOption}
        customRef={locationRef}
      />
      <LabeledDefaultButton
        customRef={locationRef}
        onClick={() => {
          setSortedModal(!isOpenedSortedModal);
        }}
        text="정렬"
      />
      <LabeledDefaultButton
        onClick={() => {
          setSortedModal(!isOpenedSortedModal);
        }}
        text="@ 필터"
      />
    </Container>
  );
};

export default BrowseMordalContainer;
