import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import SortedOptionMordal from '@molecules/SortedOptionMordal';
import { browseChannelSortOption } from '@state/Channel';
import React, { useRef, useState } from 'react';

import Container from './styles';

const BrowseMordalContainer = (): JSX.Element => {
  const [isOpenedSortedModal, setSortedModal] = useState<boolean>(false);
  const locationRef = useRef();

  return (
    <Container>
      <SortedOptionMordal
        onClose={() => {
          setSortedModal(false);
        }}
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
