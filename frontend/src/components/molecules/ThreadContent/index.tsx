import ImageButton from '@atoms/ImageButton';
import Label from '@atoms/Label';
import React from 'react';
import { Container, TextSet } from './styles';

const ThreadContent = (): JSX.Element => {
  return (
    <Container>
      <ImageButton
        onClick={() => {
          console.log('img');
        }}
        width={30}
        height={30}
        image={'./img'}
      />
      <TextSet>
        <Label text="user name"></Label>
        <Label text=" time "></Label>
        <div>content insert here</div>
      </TextSet>
    </Container>
  );
};

export default ThreadContent;
