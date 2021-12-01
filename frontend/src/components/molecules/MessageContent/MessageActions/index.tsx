import React, { useRef, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import EmojiModal from '@organisms/EmojiModal';
import useRefLocate from '@hook/useRefLocate';
import userState from '@state/user';
import { replyToggleState } from '@state/workspace';
import { Message } from '@global/type';
import { onEmojiSet } from '@global/util/reaction';
import { checkIsInReplySide } from '@global/util/reply';
import { removeMessage } from '@global/util/message';
import { BsEmojiSmile, BsBookmark } from 'react-icons/bs';
import { BiMessageRoundedDetail, BiDotsVerticalRounded } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import {
  Container,
  ThreadActionsGroup,
  ActionButton,
  ActionsMenu,
  MenuItems,
  MenuItem,
  MenuSeparator,
  MenuSeparatorHr,
  MenuItemButton,
} from './styles';

interface Props {
  messageObject: Message;
  channelName: string[];
  setUpdateState: (arg: boolean) => void;
}

const MessageActions = ({
  messageObject,
  channelName,
  setUpdateState,
}: Props): JSX.Element => {
  const dotsVerticalButtonRef = useRef(null);
  const emojiButtonRef = useRef(null);
  const [modalState, setModalState] = useState(false);

  const [dotsVerticalXWidth, dotsVerticalYHeight] = useRefLocate(
    dotsVerticalButtonRef,
    50,
  );
  const [emojiXWidth, emojiYHeight] = useRefLocate(emojiButtonRef, 50);

  const { channelId }: { channelId: string } = useParams();
  const user = useRecoilValue(userState);
  const [replyToggle, setReplyToggle] = useRecoilState(replyToggleState);

  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const isInReplySide = checkIsInReplySide(messageObject, replyToggle);

  const myMessageActionMenus = (
    <MenuItems>
      <MenuItem>
        <MenuItemButton text="댓글에 대한 알림 끄기" onClick={() => {}} />
      </MenuItem>
      <MenuSeparator>
        <MenuSeparatorHr />
      </MenuSeparator>
      <MenuItem>
        <MenuItemButton text="읽지 않음으로 표시" onClick={() => {}} />
      </MenuItem>
      <MenuItem>
        <MenuItemButton text="이에 대한 리마인더 받기" onClick={() => {}} />
      </MenuItem>
      <MenuSeparator>
        <MenuSeparatorHr />
      </MenuSeparator>
      <MenuItem>
        <MenuItemButton text="링크 복사" onClick={() => {}} />
      </MenuItem>
      <MenuSeparator>
        <MenuSeparatorHr />
      </MenuSeparator>
      <MenuItem>
        <MenuItemButton text="채널에 고정" onClick={() => {}} />
      </MenuItem>
      <MenuSeparator>
        <MenuSeparatorHr />
      </MenuSeparator>
      <MenuItem>
        <MenuItemButton
          text="메시지 편집"
          onClick={() => {
            setUpdateState(true);
            setModalState(false);
          }}
        />
      </MenuItem>
      <MenuItem>
        <MenuItemButton
          text="메시지 삭제"
          color="#e01e5a"
          onClick={() =>
            removeMessage(
              messageObject,
              replyToggle,
              setReplyToggle,
              Number(channelId),
              user.socket,
            )
          }
        />
      </MenuItem>
    </MenuItems>
  );

  const otherMessageActionMenus = (
    <MenuItems>
      <MenuItem>
        <MenuItemButton text="새 댓글이 달리면 알림 받기" onClick={() => {}} />
      </MenuItem>
      <MenuSeparator>
        <MenuSeparatorHr />
      </MenuSeparator>
      <MenuItem>
        <MenuItemButton text="읽지 않음으로 표시" onClick={() => {}} />
      </MenuItem>
      <MenuItem>
        <MenuItemButton text="이에 대한 리마인더 받기" onClick={() => {}} />
      </MenuItem>
      <MenuSeparator>
        <MenuSeparatorHr />
      </MenuSeparator>
      <MenuItem>
        <MenuItemButton text="링크 복사" onClick={() => {}} />
      </MenuItem>
      <MenuSeparator>
        <MenuSeparatorHr />
      </MenuSeparator>
      <MenuItem>
        <MenuItemButton text="채널에 고정" onClick={() => {}} />
      </MenuItem>
    </MenuItems>
  );

  return (
    <Container>
      <ThreadActionsGroup>
        <ActionButton
          customRef={emojiButtonRef}
          onClick={() => {
            setIsEmojiOpen(true);
          }}
          icon={BsEmojiSmile}
        />
        {!isInReplySide && (
          <ActionButton
            customRef={dotsVerticalButtonRef}
            onClick={() => {
              setReplyToggle({
                isOpened: true,
                message: messageObject,
                channelName,
              });
            }}
            icon={BiMessageRoundedDetail}
          />
        )}
        {!isInReplySide && (
          <ActionButton onClick={() => {}} icon={RiShareForwardLine} />
        )}
        <ActionButton onClick={() => {}} icon={BsBookmark} />
        <ActionButton
          customRef={dotsVerticalButtonRef}
          onClick={() => {
            setModalState(true);
          }}
          icon={BiDotsVerticalRounded}
        />
      </ThreadActionsGroup>
      <ActionsMenu
        xWidth={dotsVerticalXWidth - 250}
        yHeight={dotsVerticalYHeight}
        isOpened={modalState}
        onClose={() => setModalState(false)}
        customRef={dotsVerticalButtonRef}
      >
        {messageObject.userHasWorkspaceId === user.userHasWorkspaceId
          ? myMessageActionMenus
          : otherMessageActionMenus}
      </ActionsMenu>
      <EmojiModal
        customRef={emojiButtonRef}
        xWidth={emojiXWidth - 250}
        yHeight={emojiYHeight}
        isOpen={isEmojiOpen}
        close={() => setIsEmojiOpen(false)}
        onEmojiSet={onEmojiSet(
          user,
          messageObject.id,
          messageObject.threadId,
          Number(channelId),
        )}
      />
    </Container>
  );
};

export default MessageActions;
