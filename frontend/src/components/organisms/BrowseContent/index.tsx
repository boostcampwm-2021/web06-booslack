import React from 'react';
import { useSetRecoilState } from 'recoil';
import Label from '@atoms/Label';

import BrowseChannelList from '@organisms/BrowseChannelList';
import { channelCreateModalState } from '@state/modal';
import {
  Container,
  StyledBrowseChannelHeader,
  StyledLabeledButton,
} from './styles';

const BrowseContent = (): JSX.Element => {
  const setIsOpen = useSetRecoilState(channelCreateModalState);

  const Title: JSX.Element = <Label text="채널 브라우저" />; // to-do React.memo
  const RightButton = (
    <StyledLabeledButton
      onClick={() => {
        setIsOpen(true);
      }}
      text="채널 생성"
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
