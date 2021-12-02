import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { MdFilterList } from 'react-icons/md';
import { BiSort } from 'react-icons/bi';
import SortedOptionMordal from '@molecules/SortedOptionMordal';
import { browseChannelSortOption } from '@state/Channel';

import {
  Container,
  StyledLabeledDefaultButton,
  StyledButtonContainer,
  StyledIconButton,
} from './styles';

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

      <StyledButtonContainer
        onClick={() => {
          setSortedModal(!isOpenedSortedModal);
        }}
        ref={locationRef}
      >
        <StyledIconButton icon={BiSort} onClick={() => {}} />
        <StyledLabeledDefaultButton text="정렬" />
      </StyledButtonContainer>

      <StyledButtonContainer
        onClick={() => {
          setSortedModal(!isOpenedSortedModal);
        }}
      >
        <StyledIconButton icon={MdFilterList} onClick={() => {}} />
        <StyledLabeledDefaultButton text="필터" />
      </StyledButtonContainer>
    </Container>
  );
};

export default BrowseMordalContainer;
