import React from 'react';
import ImageButton from '@atoms/ImageButton';
import Label from '@atoms/Label';
import { Container, TextSet } from './styles';

interface Props {
  firstLabelContent: string | undefined;
  secondLabelContent: string | undefined;
}

const ThreadContent = ({
  firstLabelContent,
  secondLabelContent,
}: Props): JSX.Element => {
  return (
    <Container>
      <ImageButton
        onClick={() => {
          console.log('img');
        }}
        width={30}
        height={30}
        image="./img"
      />
      <TextSet>
        <Label text={firstLabelContent || 'user name'} />
        <Label text={secondLabelContent || ' time '} />
        <div>content insert here</div>
      </TextSet>
    </Container>
  );
};

export default ThreadContent;
