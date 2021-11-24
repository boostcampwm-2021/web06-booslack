import React, { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

export const updateMessage = async (
  threadId: string,
  channelId: string,
  message: string,
  socket,
  setUpdateState: Dispatch<SetStateAction<boolean>>,
): Promise<any> => {
  const res = await axios.put(`/api/threads/${threadId}`, {
    message,
  });
  if (res.status === 200) {
    setUpdateState(false);
    socket.emit('threads', channelId);
  }
};

export const deleteMessage = async (
  threadId: string,
  channelId: string,
  socket,
): Promise<any> => {
  const res = await axios.delete(`/api/threads/${threadId}`);
  if (res.status === 200) {
    socket.emit('threads', channelId);
  }
};

export const postMessage = async (
  userHasWorkspaceId: string,
  channelId: string,
  message: string,
  socket,
  setMessageClear: Dispatch<SetStateAction<boolean>>,
): Promise<any> => {
  const res = await axios.post('/api/threads', {
    userHasWorkspaceId,
    message,
    channelId,
  });
  if (res.status === 200) {
    setMessageClear(true);
    socket.emit('threads', channelId);
  }
};

export const postMessageAndFiles = async (
  userHasWorkspaceId: string,
  channelId: string,
  message: string,
  socket,
  setMessageClear: Dispatch<SetStateAction<boolean>>,
  setMessage,
  selectedFile: any,
  setSelectedFile,
  setSelectedFileUrl,
): Promise<any> => {
  if (message === '<p><br/></p>' && selectedFile.length === 0) return;
  const res = await axios.post('/api/threads', {
    userHasWorkspaceId,
    message,
    channelId,
  });
  if (res.status === 200) {
    setMessageClear(true);
    socket.emit('threads', channelId);
  }

  const threadId: number = res.data.thread.id || null;
  let fileUrl = '/api/files/upload';
  const formDatas = new FormData();
  const selectedFileLength = selectedFile.length;
  if (selectedFileLength > 1) fileUrl = '/api/files/uploads';
  if (selectedFileLength === 0) return;
  // eslint-disable-next-line array-callback-return
  selectedFile.map((fileElement) => {
    formDatas.append('file', fileElement);
  });
  setSelectedFile([]);
  setSelectedFileUrl([]);
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };

  axios
    .post(fileUrl, formDatas, config)
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .then((response) => {
      const fileList: Array<number> = response.data.files;
      // eslint-disable-next-line array-callback-return
      fileList.map(async (fileId) => {
        await axios.put(`/api/files/${fileId}`, { threadId });
      });
    })
    .catch((err) => {
      throw new Error('No files Error');
    });
};
