import React from 'react';
import { useSetRecoilState } from 'recoil';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import BrowseChannelList from '@organisms/BrowseChannelList';
import { channelCreateModalState } from '@state/modal';
import { Container, StyledBrowseChannelHeader } from './styles';

const BrowseContent = (): JSX.Element => {
  const setIsOpen = useSetRecoilState(channelCreateModalState);

  const Title: JSX.Element = <Label text="채널 브라우저" />; // to-do React.memo
  const RightButton = (
    <LabeledDefaultButton
      onClick={() => {
        setIsOpen(true);
      }}
      text="Create Channel"
    />
  );

  return (
    <Container>
      <StyledBrowseChannelHeader
        title={Title}
        content={null}
        rightButton={RightButton}
      />
      <BrowseChannelList />
    </Container>
  );
};

export default BrowseContent;
