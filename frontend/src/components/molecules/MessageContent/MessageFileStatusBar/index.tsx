import React from 'react';
import {
  ThreadFileStatusBarLayout,
  ThreadFileStatusBarContainer,
} from './styles';
import MessageFileStatusElement from '../MessageFileStatusElement';

interface Props {
  files: File[];
}

const MessageFileStatusBar = ({ files }: Props): JSX.Element => {
  return (
    <>
      <ThreadFileStatusBarLayout>
        <ThreadFileStatusBarContainer>
          {files.map((file, index) => (
            <MessageFileStatusElement file={file} key={index} />
          ))}
        </ThreadFileStatusBarContainer>
      </ThreadFileStatusBarLayout>
    </>
  );
};

export default MessageFileStatusBar;
