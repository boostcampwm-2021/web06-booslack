import React, { Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import userState from '@state/user';
import { postMessage } from '@global/api/thread';
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsCodeSlash,
  BsLink45Deg,
  BsBlockquoteLeft,
  BsEmojiSmile,
} from 'react-icons/bs';
import {
  MdFormatListNumbered,
  MdFormatListBulleted,
  MdAttachFile,
  MdSend,
} from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';
import { VscMention } from 'react-icons/vsc';
import {
  Container,
  ToolbarMiddle,
  ToolbarSuffix,
  ToolBarIconButton,
  FileInput,
  FileLabel,
} from './styles';

interface Props {
  message: string;
  focused: boolean;
  setMessage: Dispatch<SetStateAction<string>>;
  setMessageClear: Dispatch<SetStateAction<boolean>>;
  selectedFile: any;
  setSelectedFile: Dispatch<SetStateAction<any>>;
  setSelectedFileUrl: Dispatch<SetStateAction<any>>;
}

const postMessageAndFiles = async (
  userHasWorkspaceId: string,
  message: string,
  channelId: string,
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
    setMessage('<p><br/></p>');
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
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };
  axios
    .post(fileUrl, formDatas, config)
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .then((response) => {
      setSelectedFile([]);
      setSelectedFileUrl([]);
      const fileList: Array<number> = response.data.files;
      // eslint-disable-next-line array-callback-return
      fileList.map(async (fileId) => {
        await axios.put(`/api/files/${fileId}`, { threadId });
      });
    })
    .catch((err) => {
      return <div>{err}</div>;
    });
};
const Toolbar = ({
  message,
  setMessageClear,
  setMessage,
  focused,
  selectedFile,
  setSelectedFile,
  setSelectedFileUrl,
}: Props): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();
  const user = useRecoilValue(userState);
  const sendable = message !== '<p><br></p>' && message.length > 8;
  return (
    <Container>
      <ToolbarMiddle focused={focused}>
        <ToolBarIconButton onClick={() => {}} icon={BsTypeBold} />
        <ToolBarIconButton onClick={() => {}} icon={BsTypeItalic} />
        <ToolBarIconButton onClick={() => {}} icon={BsTypeStrikethrough} />
        <ToolBarIconButton onClick={() => {}} icon={BsCodeSlash} />
        <ToolBarIconButton onClick={() => {}} icon={BsLink45Deg} />
        <ToolBarIconButton onClick={() => {}} icon={BsLink45Deg} />
        <ToolBarIconButton onClick={() => {}} icon={MdFormatListNumbered} />
        <ToolBarIconButton onClick={() => {}} icon={MdFormatListBulleted} />
        <ToolBarIconButton onClick={() => {}} icon={BsBlockquoteLeft} />
        <ToolBarIconButton onClick={() => {}} icon={BiCodeBlock} />
      </ToolbarMiddle>
      <ToolbarSuffix>
        <ToolBarIconButton onClick={() => {}} icon={VscMention} />
        <ToolBarIconButton onClick={() => {}} icon={BsEmojiSmile} />
        <FileLabel htmlFor="choosefile">
          <MdAttachFile />
        </FileLabel>
        <FileInput
          type="file"
          id="choosefile"
          multiple="multiple"
          accept={'image/*'}
        />
        <ToolBarIconButton
          onClick={() => {
            postMessageAndFiles(
              user.userHasWorkspaceId,
              message,
              channelId,
              setMessage,
              selectedFile,
              setSelectedFile,
              setSelectedFileUrl,
            );
          }}
          icon={MdSend}
          className={sendable ? 'sendButtonActive' : 'sendButtonDisable'}
          disabled={!sendable}
        />
      </ToolbarSuffix>
    </Container>
  );
};

export default Toolbar;
