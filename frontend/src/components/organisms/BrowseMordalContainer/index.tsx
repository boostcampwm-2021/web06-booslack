import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import sorted from '@global/util';
import React, { useState } from 'react';
import Container, { SortedPopup } from './styles';

interface Props {
  data: {
    channels: unknown[];
  };
  setData: (unknown) => void;
}

const BrowseMordalContainer = ({ data, setData }: Props): JSX.Element => {
  const [isOpenedSortedModal, setSortedModal] = useState<boolean>(false);

  return (
    <Container>
      <SortedPopup isOpen={isOpenedSortedModal}>
        <LabeledDefaultButton
          onClick={() => {
            setData({ ...data, channels: sorted(data?.channels, 'name') });
          }}
          text="알파벳 순"
        />
        <LabeledDefaultButton
          onClick={() => {
            setData({
              ...data,
              channels: sorted(data?.channels, 'name', { reverse: true }),
            });
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
