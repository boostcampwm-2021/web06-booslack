import React, { useContext } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { replyToggleState, replyWorkspaceState } from '@state/workspace';
import Container from './styles';

const ReplyBar = (): JSX.Element => {
  const SIZEVW = useRecoilValue(replyWorkspaceState);
  const isOpened = useRecoilValue(replyToggleState);

  return (
    <Container widthVW={SIZEVW} isOpened={isOpened}>
      <></>
    </Container>
  );
};

export default ReplyBar;
