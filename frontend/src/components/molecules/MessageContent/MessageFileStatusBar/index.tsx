import React from 'react';
import {
  ThreadFileStatusBarLayout,
  ThreadFileStatusBarContainer,
} from './styles';
import ThreadFileStatusElement from '../MessageFileStatusElement';

interface Props {
  files: File[];
}

const MessageFileStatusBar = ({ files }: Props): JSX.Element => {
  return (
    <>
      <ThreadFileStatusBarLayout>
        <ThreadFileStatusBarContainer>
          {files.map((file, index) => (
            <ThreadFileStatusElement file={file} key={index} />
          ))}
        </ThreadFileStatusBarContainer>
      </ThreadFileStatusBarLayout>
    </>
  );
};

export default MessageFileStatusBar;
