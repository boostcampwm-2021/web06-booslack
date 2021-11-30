import React from 'react';
import { MdTextSnippet } from 'react-icons/md';
import { ThreadFileStatusElementImage } from './styles';

interface Props {
  file: File;
}

const ThreadFileStatusElement = ({ file }: Props): JSX.Element => {
  const fileUrl = file?.url || MdTextSnippet;
  return (
    <>
      {file?.url ? (
        <ThreadFileStatusElementImage image={fileUrl} />
      ) : (
        <MdTextSnippet width={35} height={35} />
      )}
    </>
  );
};

export default ThreadFileStatusElement;
