import React, { useCallback, useState } from 'react';
import WysiwygEditor from '@molecules/WysiwygEditor';
import { useDropzone } from 'react-dropzone';
import { FiDownload } from 'react-icons/fi';
import { MAX_FILE_SIZE } from '@global/util/file';
import Toolbar from './Toolbar';
import FileStatusBar from './FileStatusBar';
import {
  Container,
  WysiwygContainer,
  NotificationBar,
  WysiwygColumn,
  DropAlertContainer,
  DragAndDropContainer,
} from './styles';

interface Props {
  onSendClick;
  isReply?: boolean;
}

const ChatInputBar = ({ onSendClick, isReply }: Props): JSX.Element => {
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const [messageClear, setMessageClear] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [selectedFileUrl, setSelectedFileUrl] = useState([]);
  function UploadTargetFiles(uploadList) {
    const afterUploadListUrl = [...selectedFileUrl];
    for (let i = 0; i < uploadList.length; i += 1) {
      // eslint-disable-next-line no-continue
      if (uploadList[i].size > MAX_FILE_SIZE) continue;
      selectedFile.push(uploadList[i]);
      const url = URL.createObjectURL(uploadList[i]);
      afterUploadListUrl.push(url);
    }
    setSelectedFileUrl(afterUploadListUrl);
    console.log(selectedFile, selectedFileUrl, isReply);
  }
  const handleFileUpload = (event) => {
    event.stopPropagation();
    UploadTargetFiles(event.target.files);
  };
  const onDrop = useCallback(
    (acceptedFiles) => {
      UploadTargetFiles(acceptedFiles);
    },
    [selectedFile, selectedFileUrl],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...getRootProps()}>
      {isDragActive ? (
        <DropAlertContainer>
          <span>Drop the files here</span>
          <FiDownload size={40} />
        </DropAlertContainer>
      ) : (
        <></>
      )}
      <DragAndDropContainer onChange={handleFileUpload}>
        <WysiwygContainer>
          <WysiwygEditor
            message={message}
            setMessage={setMessage}
            setFocused={setFocused}
            messageClear={messageClear}
            setMessageClear={setMessageClear}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            setSelectedFileUrl={setSelectedFileUrl}
            onSendClick={onSendClick}
          />
        </WysiwygContainer>
        <WysiwygColumn>
          <FileStatusBar
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            selectedFileUrl={selectedFileUrl}
            setSelectedFileUrl={setSelectedFileUrl}
          />
        </WysiwygColumn>
        <Toolbar
          message={message}
          setMessage={setMessage}
          focused={focused}
          setMessageClear={setMessageClear}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setSelectedFileUrl={setSelectedFileUrl}
          onSendClick={onSendClick}
          handleFileUpload={(e) => handleFileUpload(e)}
          isReply={isReply}
        />
      </DragAndDropContainer>
      <NotificationBar />
    </Container>
  );
};

ChatInputBar.defaultProps = {
  isReply: false,
};

export default ChatInputBar;
