import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import ChannelAbout from '@organisms/ChannelAbout';
import ChannelMembers from '@organisms/ChannelMembers';
import { useChannelQuery } from '@hook/useChannels';
import { channelInfoModalState } from '@state/modal';
import {
  Container,
  StyledLabel,
  StyledModal,
  Tab,
  TabContainer,
} from './styles';

const ChannelInfoModal = (): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const [isOpen, setIsOpen] = useRecoilState(channelInfoModalState);
  const [isAboutTab, setIsAboutTab] = useState(false);

  const { isLoading, isError, data } = useChannelQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Container>
        <StyledLabel text={`${data.private ? '🔒' : '#'} ${data.name}`} />
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
