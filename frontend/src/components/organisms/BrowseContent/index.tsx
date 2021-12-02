import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Label from '@atoms/Label';
import AsyncBranch from '@molecules/AsyncBranch';
import BrowseChannelList from '@organisms/BrowseChannelList';
import { channelCreateModalState } from '@state/modal';
import { mainWorkspaceSizeState } from '@state/workspace';
import {
  Container,
  StyledBrowseChannelHeader,
  StyledLabeledButton,
} from './styles';

const BrowseContent = (): JSX.Element => {
  const setIsOpen = useSetRecoilState(channelCreateModalState);
  const WIDTHSIZE = useRecoilValue(mainWorkspaceSizeState);

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
    <Container widthVW={WIDTHSIZE}>
      <StyledBrowseChannelHeader
        title={Title}
        content={null}
        rightButton={RightButton}
      />
      <AsyncBranch size={100}>
        <BrowseChannelList />
      </AsyncBranch>
    </Container>
  );
};

export default BrowseContent;
