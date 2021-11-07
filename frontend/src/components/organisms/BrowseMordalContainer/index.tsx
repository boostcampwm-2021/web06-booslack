import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import { browseChannelSortOption } from '@state/Channel';
import { SortOption } from '@global/type';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Container, { SortedPopup } from './styles';

const BrowseMordalContainer = (): JSX.Element => {
  const [isOpenedSortedModal, setSortedModal] = useState<boolean>(false);
  const sortOption = useSetRecoilState<SortOption>(browseChannelSortOption);

  return (
    <Container>
      <SortedPopup isOpen={isOpenedSortedModal}>
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
      </SortedPopup>

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
