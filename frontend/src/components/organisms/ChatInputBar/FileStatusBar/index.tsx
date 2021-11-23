import React, { Dispatch, SetStateAction } from 'react';
import FileStatusElement from '../FileStatusElement';
import { FileStatusColumn } from './styles';

interface Props {
  selectedFile: any;
  selectedFileUrl: any;
  setSelectedFile: Dispatch<SetStateAction<any>>;
  setSelectedFileUrl: Dispatch<SetStateAction<any>>;
}

const FileStatusBar = ({
  selectedFile,
  selectedFileUrl,
  setSelectedFile,
  setSelectedFileUrl,
}: Props): JSX.Element => {
  return (
    <>
      {selectedFileUrl.map((url) => (
        <>
          <FileStatusColumn>
            <FileStatusElement url={url} />
          </FileStatusColumn>
        </>
      ))}
    </>
  );
};

export default FileStatusBar;
