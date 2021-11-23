import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { channelTopicModalState } from '@state/modal';
import useInputs from '@hook/useInputs';
import { useChannelQuery } from '@hook/useChannels';
import { updateChannel } from '@global/api/channel';
import userState from '@state/user';
import {
  ButtonContainer,
  CancelButton,
  Container,
  SaveButton,
  StyledInput,
  StyledLabel,
  StyledModal,
} from './styles';

const ChannelTopicModal = (): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const { isLoading, isError, data } = useChannelQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  const user = useRecoilValue(userState);
  const [isOpen, setIsOpen] = useRecoilState(channelTopicModalState);
  const [{ topic }, onChange, clear] = useInputs({
    topic: data.topic,
  });

  const updateChannelTopic = async () => {
    data.topic = topic;
    updateChannel(data, user.socket);
    clear();
    setIsOpen(false);
  };

  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)} zIndex={200}>
      <Container>
        <StyledLabel text="Edit topic" />
        <StyledInput
          placeholder="Describe your team"
          onChange={onChange}
          name="topic"
          value={topic}
        />
        <ButtonContainer>
          <CancelButton text="Cancel" onClick={() => setIsOpen(false)} />
          <SaveButton text="Save" onClick={updateChannelTopic} />
        </ButtonContainer>
      </Container>
    </StyledModal>
  );
};

export default ChannelTopicModal;
