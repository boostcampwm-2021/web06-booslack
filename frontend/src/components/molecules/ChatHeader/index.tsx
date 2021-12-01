import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { MdPeople } from 'react-icons/md';
import { channelInfoModalState } from '@state/modal';
import { useChannelQuery } from '@hook/useChannels';
import { Container, StyledLabeledButton, StyledIconButton } from './styles';

const ChatHeader = (): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();

  const setIsOpen = useSetRecoilState(channelInfoModalState);
  const { isLoading, isError, data } = useChannelQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <Container>
      <StyledLabeledButton
        text={data.name}
        onClick={() => setIsOpen({ isOpen: true, isAboutTab: true })}
      />
      <StyledIconButton
        icon={MdPeople}
        onClick={() => setIsOpen({ isOpen: true, isAboutTab: false })}
      />
    </Container>
  );
};

export default ChatHeader;
