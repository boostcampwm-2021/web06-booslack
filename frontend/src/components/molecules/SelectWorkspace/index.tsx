import React from 'react';

import Label from '@atoms/Label';
import { StlyedImageButton, Container, TextSet } from './styles';

interface Props {
  firstLabelContent?: string;
  secondLabelContent?: string;
  content?: string;
  className?: string;
}

const SelectWorkspace = ({
  firstLabelContent,
  secondLabelContent,
  content,
  className,
}: Props): JSX.Element => {
  return (
    <Container className={className}>
      <StlyedImageButton
        onClick={() => {
          console.log('img');
        }}
        image="./img"
      />
      <TextSet>
        <Label text={firstLabelContent} />
        <Label text={secondLabelContent} />
        <div>{`${content}명의 맴버`}</div>
      </TextSet>
    </Container>
  );
};

SelectWorkspace.defaultProps = {
  firstLabelContent: '',
  secondLabelContent: '',
  className: '',
  content: 'content insert here',
};

export default SelectWorkspace;
