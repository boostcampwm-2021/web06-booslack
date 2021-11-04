import Label from '@atoms/Label';
import LabeledButton from '@atoms/LabeledButton';
import ChatHeader from '@molecules/ChatHeader';
import ChatInputBackground from '@organisms/ChatInputBackground';
import ChatContent from '@organisms/ChatContent';
import React from 'react';
import { Container, MarginedDiv } from './style';

const WorkspaceContent = (): JSX.Element => {
  const ChannelTitle: JSX.Element = <Label text="# channel name" />;
  const ExplainContent: JSX.Element | null = (
    <Label color="grey" text="channel explain " />
  );
  const InputBar: JSX.Element = <ChatInputBackground />;
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
    <Container>
      <ChatHeader
        title={
          <MarginedDiv>
            {ChannelTitle}
            {ExplainContent}
          </MarginedDiv>
        }
        content={null}
        rightButton={RightButton}
      />
      <ChatContent inputBar={InputBar} />
    </Container>
  );
};

export default WorkspaceContent;
