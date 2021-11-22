import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { useChannelQuery } from '@hook/useChannels';
import {
  channelDescriptionModalState,
  channelTopicModalState,
} from '@state/modal';
import AboutElement from './AboutElement';
import { BackgroundContainer, Container } from './styles';

const ChannelAbout = (): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const setChannelDescriptionModalIsOpen = useSetRecoilState(
    channelDescriptionModalState,
  );
  const setChannelTopicModalIsOpen = useSetRecoilState(channelTopicModalState);

  const { isLoading, isError, data } = useChannelQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <BackgroundContainer>
      <Container>
        <AboutElement
          light
          edit
          title="Topic"
          description={data.topic ?? 'Add a topic'}
          onClick={() => setChannelTopicModalIsOpen(true)}
        />
        <AboutElement
          edit
          title="Description"
          description={data.description ?? 'Add a description'}
          onClick={() => setChannelDescriptionModalIsOpen(true)}
        />
        <AboutElement
          red
          title="Leave channel"
          description=""
          onClick={() => console.log('leave channel')}
        />
      </Container>
    </BackgroundContainer>
  );
};

export default ChannelAbout;
