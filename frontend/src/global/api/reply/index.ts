import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { Socket } from 'socket.io-client';
import API from '@global/api';

export const updateReply = async (
  replyId: string,
  threadId: string,
  channelId: string,
  message: string,
  socket: Socket,
  setUpdateState: Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  const res = await axios.put(`${API.put.reply}/${replyId}`, {
    message,
  });

  if (res.status === 200) {
    setUpdateState(false);
    socket.emit('threads', channelId, threadId);
  }
};

export const deleteReply = async (
  replyId: string,
  threadId: string,
  channelId: string,
  socket: Socket,
): Promise<void> => {
  const res = await axios.delete(`${API.delete.reply}/${replyId}`);

  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};

export const postReply = async (
  userHasWorkspaceId: string,
  threadId: string,
  channelId: string,
  message: string,
  socket: Socket,
  setMessageClear: Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  const res = await axios.post(API.post.reply, {
    userHasWorkspaceId,
    message,
    threadId,
  });

  if (res.status === 200) {
    setMessageClear(true);
    socket.emit('threads', channelId, threadId);
  }
};

export const postReplyAndFiles = async (
  userHasWorkspaceId: string,
  threadId: string,
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
    const res = await axios.post('/api/replys', {
      userHasWorkspaceId,
      message,
      threadId,
    });

    const replyId: number = res.data.reply.id || null;
    const selectedFileLength = selectedFile.length;

    if (selectedFileLength === 0 && res.status === 200) {
      setMessageClear(true);
      socket.emit('threads', channelId, threadId);
      if (res.data.reply.userHasWorkspaceId === userHasWorkspaceId) {
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
    const response = await axios.put(`/api/replys/files/${replyId}`, {
      files: fileList,
    });
    if (response.status === 200) {
      setMessageClear(true);
      socket.emit('threads', channelId, threadId);
      if (res.data.reply.userHasWorkspaceId === userHasWorkspaceId) {
        setShouldScrollDown(true);
      }
    }
  } catch (e) {
    setMessageClear(true);
  }
};
