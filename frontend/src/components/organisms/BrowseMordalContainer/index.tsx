import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import SortedOptionMordal from '@molecules/SortedOptionMordal';
import { browseChannelSortOption } from '@state/Channel';
import React, { useState } from 'react';

import Container from './styles';

const BrowseMordalContainer = (): JSX.Element => {
  const [isOpenedSortedModal, setSortedModal] = useState<boolean>(true);

  return (
    <Container>
      <SortedOptionMordal
        isOpened={isOpenedSortedModal}
        usingAtom={browseChannelSortOption}
      />
      <LabeledDefaultButton
        onClick={() => {
          setSortedModal(!isOpenedSortedModal);
        }}
        text="정렬"
      />
      <LabeledDefaultButton text="@ 필터" />
    </Container>
  );
};

export default BrowseMordalContainer;
