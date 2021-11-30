import React, { Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userState from '@state/user';
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
import { shouldScrollDownState } from '@state/thread';
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
  selectedFile: [];
  setSelectedFile: Dispatch<SetStateAction<[]>>;
  setSelectedFileUrl: Dispatch<SetStateAction<[]>>;
  onSendClick;
  handleFileUpload;
  isReply?: boolean;
}

const Toolbar = ({
  message,
  setMessageClear,
  setMessage,
  focused,
  selectedFile,
  setSelectedFile,
  setSelectedFileUrl,
  onSendClick,
  handleFileUpload,
  isReply,
}: Props): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();
  const user = useRecoilValue(userState);
  const setShouldScrollDown = useSetRecoilState(shouldScrollDownState);

  const sendable =
    (message !== '<p><br></p>' && message.trim().length > 8) ||
    selectedFile.length > 0;

  const toolbarMiddleButtonList = [
    BsTypeBold,
    BsTypeItalic,
    BsTypeStrikethrough,
    BsCodeSlash,
    BsLink45Deg,
    MdFormatListNumbered,
    MdFormatListBulleted,
    BsBlockquoteLeft,
    BiCodeBlock,
  ];

  return (
    <Container className={focused && 'toolbar--active'}>
      <ToolbarMiddle focused={focused}>
        {toolbarMiddleButtonList.map((icon) => (
          <ToolBarIconButton
            key={icon.name}
            onClick={() => {}}
            icon={icon}
            className={focused && 'active'}
          />
        ))}
      </ToolbarMiddle>
      <ToolbarSuffix>
        <ToolBarIconButton
          onClick={() => {}}
          icon={VscMention}
          className="active"
        />
        <ToolBarIconButton
          onClick={() => {}}
          icon={BsEmojiSmile}
          className="active"
        />
        <FileLabel htmlFor={isReply ? 'chooseFileReply' : 'chooseFile'}>
          <MdAttachFile />
        </FileLabel>
        <FileInput
          type="file"
          id={isReply ? 'chooseFileReply' : 'chooseFile'}
          multiple="multiple"
          accept={'image/*'}
          onChange={handleFileUpload}
        />
        <ToolBarIconButton
          onClick={() =>
            onSendClick(
              sendable,
              user.userHasWorkspaceId,
              channelId,
              message,
              user.socket,
              setMessageClear,
              setMessage,
              selectedFile,
              setSelectedFile,
              setSelectedFileUrl,
              setShouldScrollDown,
            )
          }
          icon={MdSend}
          className={sendable && 'sendButtonActive'}
        />
      </ToolbarSuffix>
    </Container>
  );
};

Toolbar.defaultProps = {
  isReply: false,
};

export default Toolbar;
