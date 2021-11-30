import React, { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

export const updateReply = async (
  replyId: string,
  threadId: string,
  channelId: string,
  message: string,
  socket,
  setUpdateState: Dispatch<SetStateAction<boolean>>,
): Promise<any> => {
  const res = await axios.put(`/api/replys/${replyId}`, {
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
  socket,
): Promise<any> => {
  const res = await axios.delete(`/api/replys/${replyId}`);
  if (res.status === 200) {
    socket.emit('threads', channelId, threadId);
  }
};

export const postReply = async (
  userHasWorkspaceId: string,
  threadId: string,
  channelId: string,
  message: string,
  socket,
  setMessageClear: Dispatch<SetStateAction<boolean>>,
): Promise<any> => {
  const res = await axios.post('/api/replys', {
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
  socket,
  setMessageClear: Dispatch<SetStateAction<boolean>>,
  setMessage,
  selectedFile: any,
  setSelectedFile,
  setSelectedFileUrl,
  setShouldScrollDown,
): Promise<any> => {
  if (message === '<p><br/></p>' && selectedFile.length === 0) return;
  const res = await axios.post('/api/replys', {
    userHasWorkspaceId,
    message,
    threadId,
  });
  if (res.status === 200) {
    setMessageClear(true);
    socket.emit('threads', channelId, threadId);
    if (res.data.reply.userHasWorkspaceId === userHasWorkspaceId) {
      setShouldScrollDown(true);
    }
  }

  const replyId: number = res.data.reply.id || null;
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
      const fileList: Array<File> = response.data.files;
      const fileIdList: Array<number> = [];
      fileList.map((element) => {
        fileIdList.push(element?.id || element?.fileId);
      });
      // eslint-disable-next-line array-callback-return
      fileList.map(async (fileId) => {
        await axios.put(`/api/files/${fileId}`, { replyId });
      });
      axios.put(`/api/replys/${replyId}`, { files: fileList });
    })
    .catch((err) => {
      throw new Error('No files Error');
    });
};
