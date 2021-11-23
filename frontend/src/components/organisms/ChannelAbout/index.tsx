import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useHistory, useParams } from 'react-router-dom';
import { useChannelQuery } from '@hook/useChannels';
import {
  channelDescriptionModalState,
  channelInfoModalState,
  channelTopicModalState,
} from '@state/modal';
import userState from '@state/user';
import { leaveChannel } from '@global/api/channel';
import AboutElement from './AboutElement';
import { BackgroundContainer, Container } from './styles';

const ChannelAbout = (): JSX.Element => {
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();
  const history = useHistory();

  const setChannelDescriptionModalIsOpen = useSetRecoilState(
    channelDescriptionModalState,
  );
  const user = useRecoilValue(userState);
  const setIsOpen = useSetRecoilState(channelInfoModalState);
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
          onClick={async () => {
            try {
              await leaveChannel(channelId, workspaceId, user.socket);
              setIsOpen(false);
            } catch (error) {
              history.push('error');
            }
          }}
        />
      </Container>
    </BackgroundContainer>
  );
};

export default ChannelAbout;
