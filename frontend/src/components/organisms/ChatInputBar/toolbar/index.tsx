import React from 'react';
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
} from './styles';

interface Props {
  message: string;
  focused: boolean;
}

const Toolbar = ({ message, focused }: Props): JSX.Element => {
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
        <ToolBarIconButton onClick={() => {}} icon={MdAttachFile} />
        {/* 파일 붙이기는 나중에 인풋 타입으로 바꿔야함  */}
        <ToolBarIconButton
          onClick={() => {}}
          icon={MdSend}
          className={sendable ? 'sendButtonActive' : 'sendButtonDisable'}
        />
      </ToolbarSuffix>
    </Container>
  );
};

export default Toolbar;
