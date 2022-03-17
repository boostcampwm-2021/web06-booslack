import React from 'react';
import { useSetRecoilState } from 'recoil';
import { widthSizeState } from '@state/workspace';

import Container from './styles';

const DraggableDiv = (): JSX.Element => {
  const setWidthSize = useSetRecoilState(widthSizeState);

  const dragEventHandler = (e: React.DragEvent) => {
    const { target } = e;
    const { parentNode } = target;

    const parentBox = parentNode.getBoundingClientRect();
    setWidthSize(Math.max(47, (e.clientX / parentBox.width) * 100 + 1));
  };

  return <Container draggable="true" onDragEnd={dragEventHandler} />;
};

export default DraggableDiv;
