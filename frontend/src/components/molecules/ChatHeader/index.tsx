import React from 'react';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { MdPeople } from 'react-icons/md';
import { channelInfoModalState } from '@state/modal';
import { useChannelQuery } from '@hook/useChannels';
import { Container, StyledLabeledButton, StyledIconButton } from './styles';

const ChatHeader = (): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();
  const [, setIsOpen] = useRecoilState(channelInfoModalState);
  const { isLoading, isError, data } = useChannelQuery(channelId);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  const open = () => setIsOpen(true);

  return (
    <Container>
      <StyledLabeledButton text={data.name} onClick={open} />
      <StyledIconButton icon={MdPeople} onClick={open} />
    </Container>
  );
};

export default ChatHeader;
