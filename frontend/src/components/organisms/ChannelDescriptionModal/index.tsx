import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { channelDescriptionModalState } from '@state/modal';
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

const ChannelDescriptionModal = (): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const { isLoading, isError, data } = useChannelQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  const user = useRecoilValue(userState);
  const [isOpen, setIsOpen] = useRecoilState(channelDescriptionModalState);
  const [{ description }, onChange, clear] = useInputs({
    description: data.description,
  });

  const updateChannelDescription = async () => {
    data.description = description;
    updateChannel(data, user.socket);
    clear();
    setIsOpen(false);
  };

  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)} zIndex={200}>
      <Container>
        <StyledLabel text="Edit description" />
        <StyledInput
          placeholder="Describe your team"
          onChange={onChange}
          name="description"
          value={description}
        />
        <ButtonContainer>
          <CancelButton text="Cancel" onClick={() => setIsOpen(false)} />
          <SaveButton text="Save" onClick={updateChannelDescription} />
        </ButtonContainer>
      </Container>
    </StyledModal>
  );
};

export default ChannelDescriptionModal;
