import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ChatHeader from '@molecules/ChatHeader';
import BrowseChannelList from '@organisms/BrowseChannelList';
import React from 'react';
import { Container } from './styles';

const BrowseContent = (): JSX.Element => {
  const Title: JSX.Element = <Label text="채널 브라우저" />; // to-do React.memo
  const RightButton = <LabeledDefaultButton onClick={() => {}} text="btn" />;

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
