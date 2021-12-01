import React from 'react';
import {
  ThreadFileStatusElementImage,
  ThreadMdTextSnippet,
  ThreadFileStatusLayOut,
} from './styles';

interface Props {
  file: File;
}

const ThreadFileStatusElement = ({ file }: Props): JSX.Element => {
  const fileUrl = file?.url;
  return (
    <>
      <ThreadFileStatusLayOut>
        {fileUrl ? (
          <ThreadFileStatusElementImage image={fileUrl} />
        ) : (
          <ThreadMdTextSnippet />
        )}
      </ThreadFileStatusLayOut>
    </>
  );
};

export default ThreadFileStatusElement;
