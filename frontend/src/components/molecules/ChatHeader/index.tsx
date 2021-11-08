import React from 'react';
import { MdPeople } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { channelInfoModalState } from 'src/state/modal';
import { Container, StyledLabeledButton, StyledIconButton } from './styles';

const ChatHeader = (): JSX.Element => {
  const [, setIsOpen] = useRecoilState(channelInfoModalState);

  const open = () => setIsOpen(true);

  return (
    <Container>
      <StyledLabeledButton text="# channel name" onClick={open} />
      <StyledIconButton icon={MdPeople} onClick={open} />
    </Container>
  );
};

export default ChatHeader;
