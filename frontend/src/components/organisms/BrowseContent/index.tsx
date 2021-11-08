import React from 'react';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import BrowseChannelList from '@organisms/BrowseChannelList';
import { Container } from './styles';

const BrowseContent = (): JSX.Element => {
  const Title: JSX.Element = <Label text="채널 브라우저" />; // to-do React.memo
  const RightButton = <LabeledDefaultButton onClick={() => {}} text="btn" />;

  return (
    <>
      <Container>
        <BrowseChannelHeader
          title={Title}
          content={null}
          rightButton={RightButton}
        />
        <BrowseChannelList />
      </Container>
    </>
  );
};

export default BrowseContent;
