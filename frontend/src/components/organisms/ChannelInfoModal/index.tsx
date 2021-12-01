import React from 'react';
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

  const [{ isOpen, isAboutTab }, setIsOpen] = useRecoilState(
    channelInfoModalState,
  );

  const { isLoading, isError, data } = useChannelQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <StyledModal
      isOpen={isOpen}
      onClose={() =>
        setIsOpen((prevState) => ({ ...prevState, isOpen: false }))
      }
    >
      <Container>
        <StyledLabel text={`${data.private ? '🔒' : '#'} ${data.name}`} />
        <TabContainer>
          <Tab
            highlight={isAboutTab}
            onClick={() =>
              setIsOpen((prevState) => ({ ...prevState, isAboutTab: true }))
            }
            text="About"
          />
          <Tab
            highlight={!isAboutTab}
            onClick={() =>
              setIsOpen((prevState) => ({ ...prevState, isAboutTab: false }))
            }
            text="Members"
          />
        </TabContainer>
        {isAboutTab ? <ChannelAbout /> : <ChannelMembers />}
      </Container>
    </StyledModal>
  );
};

export default ChannelInfoModal;
