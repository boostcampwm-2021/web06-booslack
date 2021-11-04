import ViewportInput from '@atoms/ViewPortInput';
import React from 'react';
import { Container } from './styles';

interface Props {
  width: number;
  height: number;
}

const WorkspaceChatInput = ({ width, height }: Props): JSX.Element => {
  return (
    <Container width={width} height={height}>
      <ViewportInput
        width={width}
        height={height}
        placeholder={'메세지 보내기'}
      ></ViewportInput>
    </Container>
  );
};

export default WorkspaceChatInput;
