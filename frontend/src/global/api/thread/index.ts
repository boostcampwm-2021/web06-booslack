import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { Socket } from 'socket.io-client';
import API from '@global/api';

export const updateMessage = async (
  threadId: string,
  channelId: string,
  message: string,
  socket: Socket,
  setUpdateState: Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  const res = await axios.put(`${API.put.thread}/${threadId}`, {
    message,
  });

  if (res.status === 200) {
    setUpdateState(false);
    socket.emit('threads', channelId, threadId);
  }
};

export const deleteMessage = async (
  threadId: string,
  channelId: string,
  socket: Socket,
): Promise<void> => {
  const res = await axios.delete(`${API.delete.thread}/${threadId}`);

  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};

export const postMessage = async (
  userHasWorkspaceId: string,
  channelId: string,
  message: string,
  socket: Socket,
  setMessageClear: Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  const res = await axios.post(API.post.thread, {
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
  socket: Socket,
  setMessageClear: Dispatch<SetStateAction<boolean>>,
  setMessage,
  selectedFile: any,
  setSelectedFile,
  setSelectedFileUrl,
  setShouldScrollDown,
): Promise<void> => {
  if (message === '<p><br/></p>' && selectedFile.length === 0) return;
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };
  try {
    const res = await axios.post('/api/threads', {
      userHasWorkspaceId,
      message,
      channelId,
    });

    const threadId: number = res.data.thread.id || null;
    const selectedFileLength = selectedFile.length;

    if (selectedFileLength === 0 && res.status === 200) {
      setMessageClear(true);
      socket.emit('threads', channelId);
      if (res.data.thread.userHasWorkspaceId === userHasWorkspaceId) {
        setShouldScrollDown(true);
      }
      return;
    }

    let fileUrl = '/api/files/upload';
    const formDatas = new FormData();
    if (selectedFileLength > 1) fileUrl = '/api/files/uploads';

    // eslint-disable-next-line array-callback-return
    selectedFile.map((fileElement) => {
      formDatas.append('file', fileElement);
    });
    setSelectedFile([]);
    setSelectedFileUrl([]);

    const responseFiles = await axios.post(fileUrl, formDatas, config);
    const fileList: Array<File> = await responseFiles.data.files;
    const fileIdList: Array<number> = [];
    // eslint-disable-next-line array-callback-return
    fileList.map((element) => {
      fileIdList.push(element?.id || element?.fileId);
    });
    const response = await axios.put(`/api/threads/files/${threadId}`, {
      files: fileList,
    });
    if (response.status === 200) {
      setMessageClear(true);
      socket.emit('threads', channelId);
      if (res.data.thread.userHasWorkspaceId === userHasWorkspaceId) {
        setShouldScrollDown(true);
      }
    }
  } catch (e) {
    setMessageClear(true);
  }
};
