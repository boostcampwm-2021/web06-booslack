import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import React, { useState } from 'react';
import { Container, TextSet, SpaceBetweenDiv, MarginedDiv } from './styles';

interface Props {
  firstLabelContent?: string;
  secondLabelContent?: string;
  content?: string;
}

const ChannelList = ({
  firstLabelContent,
  secondLabelContent,
  content,
}: Props): JSX.Element => {
  const [isHover, setHover] = useState<boolean>(false);

  const MouseHover = (): void => setHover(true);
  const MouseOut = (): void => setHover(false);

  return (
    <SpaceBetweenDiv onMouseEnter={MouseHover} onMouseLeave={MouseOut}>
      <Container>
        <div>{firstLabelContent || 'channel name'}</div>

        <TextSet>
          <Label color="grey" text={secondLabelContent || 'members'} />
          <Label color="grey" text={content} />
        </TextSet>
      </Container>
      <MarginedDiv>
        {isHover && <LabeledDefaultButton text="view" />}
        {isHover && (
          <LabeledDefaultButton backgroundColor="green" text="join" />
        )}
      </MarginedDiv>
    </SpaceBetweenDiv>
  );
};

export default ChannelList;
