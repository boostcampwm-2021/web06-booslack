import LabeledButton from '@atoms/LabeledButton';
import ChannelAbout from '@organisms/ChannelAbout';
import ChannelMembers from '@organisms/ChannelMembers';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { channelInfoModalState } from '@state/modal';
import {
  Container,
  StyledLabel,
  StyledModal,
  Tab,
  TabContainer,
} from './styles';

const ChannelInfoModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(channelInfoModalState);
  const [isAboutTab, setIsAboutTab] = useState(false);

  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Container>
        <StyledLabel text="# channel name" />
        <TabContainer>
          <Tab
            highlight={isAboutTab}
            onClick={() => setIsAboutTab(true)}
            text="About"
          />
          <Tab
            highlight={!isAboutTab}
            onClick={() => setIsAboutTab(false)}
            text="Members n"
          />
        </TabContainer>
        {isAboutTab ? <ChannelAbout /> : <ChannelMembers />}
      </Container>
    </StyledModal>
  );
};

export default ChannelInfoModal;
