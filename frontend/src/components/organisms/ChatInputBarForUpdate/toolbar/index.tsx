import React, { Dispatch, SetStateAction } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import userState from '@state/user';
import { replyToggleState } from '@state/workspace';
import { updateMessage } from '@global/api/thread';
import { updateReply } from '@global/api/reply';
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
  MdSend,
} from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';
import {
  Container,
  ToolbarMiddle,
  ToolbarSuffix,
  ToolBarIconButton,
} from './styles';

interface Props {
  messageId: number;
  message: string;
  focused: boolean;
  setUpdateState: Dispatch<SetStateAction<boolean>>;
  isReply: boolean;
}

const Toolbar = ({
  messageId,
  message,
  focused,
  setUpdateState,
  isReply,
}: Props): JSX.Element => {
  const { channelId }: { channelId: string } = useParams();
  const toggleState = useRecoilValue(replyToggleState);
  const user = useRecoilValue(userState);
  const sendable = message !== '<p><br></p>' && message.length > 8;

  const updateRequest = () => {
    if (isReply) {
      updateReply(
        messageId,
        toggleState?.message.id,
        Number(channelId),
        message,
        user.socket,
        setUpdateState,
      );
    } else {
      updateMessage(
        messageId,
        Number(channelId),
        message,
        user.socket,
        setUpdateState,
      );
    }
  };

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
        <ToolBarIconButton onClick={() => {}} icon={BsEmojiSmile} />
        <ToolBarIconButton
          onClick={updateRequest}
          icon={MdSend}
          className={sendable ? 'sendButtonActive' : 'sendButtonDisable'}
          disabled={!sendable}
        />
      </ToolbarSuffix>
    </Container>
  );
};

export default Toolbar;
