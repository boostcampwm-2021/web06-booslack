import React from 'react';
import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import BrowseChannelList from '@organisms/BrowseChannelList';
import { Container, StyledBrowseChannelHeader } from './styles';

const BrowseContent = (): JSX.Element => {
  const Title: JSX.Element = <Label text="채널 브라우저" />; // to-do React.memo
  const RightButton = <LabeledDefaultButton onClick={() => {}} text="btn" />;

  return (
    <Container>
      <StyledBrowseChannelHeader
        title={Title}
        content={null}
        rightButton={RightButton}
      />
      <BrowseChannelList />
    </Container>
  );
};

export default BrowseContent;
