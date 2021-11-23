import React, { useState } from 'react';
import WysiwygEditor from '@molecules/WysiwygEditor';
import Toolbar from './toolbar';
import { Container, WysiwygContainer, NotificationBar } from './styles';

const ChatInputBar = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState(false);
  const [messageClear, setMessageClear] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [selectedFileUrl, setSelectedFileUrl] = useState([]);
  const handleFileUpload = (event) => {
    const uploadList = event.target.files;
    const afterUploadListUrl = [...selectedFileUrl];
    for (let i = 0; i < uploadList.length; i += 1) {
      selectedFile.push(uploadList[i]);
      const url = URL.createObjectURL(uploadList[i]);
      afterUploadListUrl.push(url);
    }
    setSelectedFileUrl(afterUploadListUrl);
  };
  return (
    <Container>
      <div onChange={handleFileUpload}>
        <WysiwygContainer>
          <WysiwygEditor
            message={message}
            setMessage={setMessage}
            setFocused={setFocused}
            messageClear={messageClear}
            setMessageClear={setMessageClear}
          />
          <Toolbar
            message={message}
            setMessage={setMessage}
            setMessageClear={setMessageClear}
            focused={focused}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            setSelectedFileUrl={setSelectedFileUrl}
          />
        </WysiwygContainer>
        <NotificationBar />
      </div>
    </Container>
  );
};

export default ChatInputBar;
