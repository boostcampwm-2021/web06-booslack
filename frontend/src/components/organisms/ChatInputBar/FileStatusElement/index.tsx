import React from 'react';
import { FileStatusElementImg, FileStatusElementButton } from './styles';

interface Props {
  url: string;
}

const FileStatusElement = ({ url }: Props): JSX.Element => {
  return (
    <>
      <FileStatusElementImg src={url} />
      <FileStatusElementButton />
    </>
  );
};

export default FileStatusElement;
