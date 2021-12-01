import React from 'react';
import {
  ThreadFileStatusBarLayout,
  ThreadFileStatusBarContainer,
} from './styles';
import ThreadFileStatusElement from '../ThreadFileStatusElement';

interface Props {
  files: File[];
}

const ThreadFileStatusBar = ({ files }: Props): JSX.Element => {
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

export default ThreadFileStatusBar;
