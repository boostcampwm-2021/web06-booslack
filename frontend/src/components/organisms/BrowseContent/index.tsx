import Label from '@atoms/Label';
import LabeledButton from '@atoms/LabeledButton';
import ChatHeader from '@molecules/ChatHeader';
import BrowseChannelList from '@organisms/BrowseChannelList';
import React from 'react';
import { Container } from './styles';

const BrowseContent = (): JSX.Element => {
  const Title: JSX.Element = <Label text="채널 브라우저" />; // to-do React.memo
  const RightButton = (
    <LabeledButton
      onClick={() => {}}
      width={30}
      height={30}
      color={'black'}
      backgroundColor={'white'}
    />
  );

  return (
    <>
      <Container>
        <ChatHeader title={Title} content={null} rightButton={RightButton} />
        <BrowseChannelList />
      </Container>
    </>
  );
};

export default BrowseContent;
