import React from 'react';

import Label from '@atoms/Label';
import { StlyedImageButton, Container, TextSet } from './styles';

interface Props {
  firstLabelContent?: string;
  secondLabelContent?: string;
  content?: string | number;
  className?: string;
}

const SelectWorkspace = ({
  firstLabelContent,
  secondLabelContent,
  content,
  className,
}: Props): JSX.Element => {
  // eslint-disable-next-line no-trailing-spaces
  // eslint-disable-next-line operator-linebreak
  const titleText =
    firstLabelContent?.length > 13
      ? `${firstLabelContent.substr(0, 13)}...`
      : firstLabelContent;

  return (
    <Container className={className}>
      <StlyedImageButton
        onClick={() => {
          console.log('img');
        }}
        image="./img"
      />
      <TextSet>
        <Label text={titleText} />
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
  content: 0,
};

export default SelectWorkspace;
