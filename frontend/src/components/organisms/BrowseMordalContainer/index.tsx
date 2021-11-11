import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import SortedOptionMordal from '@molecules/SortedOptionMordal';
import { browseChannelSortOption } from '@state/Channel';
import React, { useState } from 'react';

import Container from './styles';

const BrowseMordalContainer = (): JSX.Element => {
  const [isOpenedSortedModal, setSortedModal] = useState<boolean>(false);
  const [isOpenedFillterModal, setFillterModal] = useState<boolean>(false);

  return (
    <Container>
      <SortedOptionMordal
        onClose={() => {
          setSortedModal(false);
        }}
        isSortOpened={isOpenedSortedModal}
        usingAtom={browseChannelSortOption}
      />
      <LabeledDefaultButton
        onClick={() => {
          setSortedModal(!isOpenedSortedModal);
        }}
        text="정렬"
      />
      <LabeledDefaultButton
        onClick={() => {
          setFillterModal(!isOpenedFillterModal);
        }}
        text="@ 필터"
      />
    </Container>
  );
};

export default BrowseMordalContainer;
