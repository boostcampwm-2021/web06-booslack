import React from 'react';
import { useRecoilState } from 'recoil';
import { channelDescriptionModalState } from '@state/modal';
import AboutElement from './AboutElement';
import { BackgroundContainer, Container } from './styles';

const ChannelAbout = (): JSX.Element => {
  const [, setIsOpen] = useRecoilState(channelDescriptionModalState);

  return (
    <BackgroundContainer>
      <Container>
        <AboutElement
          light
          edit
          title="Topic"
          description="Add a topic || topic"
          onClick={() => console.log('edit topic')}
        />
        <AboutElement
          edit
          title="Description"
          description="team description"
          onClick={() => setIsOpen(true)}
        />
        <AboutElement title="Created by" description="create by at when" />
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
