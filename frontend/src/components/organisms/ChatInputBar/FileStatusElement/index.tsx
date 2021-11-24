import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  FileStatusElementImg,
  FileStatusElementButton,
  FileStatusElementContainer,
} from './styles';

interface Props {
  url: string;
  selectedFile: any;
  selectedFileUrl: any;
  setSelectedFile: Dispatch<SetStateAction<any>>;
  setSelectedFileUrl: Dispatch<SetStateAction<any>>;
}

const FileStatusElement = ({
  url,
  selectedFile,
  selectedFileUrl,
  setSelectedFile,
  setSelectedFileUrl,
}: Props): JSX.Element => {
  const [flag, setFlag] = useState(true);
  const handleDeleteElement = () => {
    const index = selectedFileUrl.indexOf(url);
    selectedFile.splice(index, 1);
    selectedFileUrl.splice(index, 1);
    setSelectedFile(selectedFile);
    setSelectedFileUrl(selectedFileUrl);
    setFlag(false);
  };
  if (flag) {
    return (
      <FileStatusElementContainer>
        <FileStatusElementImg image={url} />
        <FileStatusElementButton
          onClick={() => {
            handleDeleteElement();
          }}
        />
      </FileStatusElementContainer>
    );
  }
  return <></>;
};

export default FileStatusElement;
