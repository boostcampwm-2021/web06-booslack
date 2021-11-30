import React from 'react';
import { ThreadFileStatusBarLayout } from './styles';
import ThreadFileStatusElement from '../ThreadFileStatusElement';

interface Props {
  files: File[];
}

const ThreadFileStatusBar = ({ files }: Props): JSX.Element => {
  return (
    <>
      <ThreadFileStatusBarLayout>
        {files.map((file) => (
          <ThreadFileStatusElement file={file} />
        ))}
      </ThreadFileStatusBarLayout>
    </>
  );
};

export default ThreadFileStatusBar;
