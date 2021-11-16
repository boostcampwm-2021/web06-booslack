import React, { useEffect } from 'react';
import { MdPeople } from 'react-icons/md';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelListState } from '@state/Channel';
import userState from '@state/user';
import { channelInfoModalState } from 'src/state/modal';
import { Container, StyledLabeledButton, StyledIconButton } from './styles';

const ChatHeader = (): JSX.Element => {
  const [, setIsOpen] = useRecoilState(channelInfoModalState);
  const user = useRecoilValue(userState);
  const channelList = useRecoilValue(channelListState);

  const open = () => setIsOpen(true);

  const channelName = user.channelId
    ? channelList[user.channelId - 1]
    : '# channel name';

  return (
    <Container>
      <StyledLabeledButton text={channelName?.name} onClick={open} />
      <StyledIconButton icon={MdPeople} onClick={open} />
    </Container>
  );
};

export default ChatHeader;
