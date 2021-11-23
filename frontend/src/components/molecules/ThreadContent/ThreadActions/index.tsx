import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import useRefLocate from '@hook/useRefLocate';
import userState from '@state/user';
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
  threadId: string;
  userHasWorkspaceId: string;
  threads: string[];
  setThreads: () => void;
  setUpdateState: (arg: boolean) => void;
}

const deleteMessage = async (threadId, threads, setThreads) => {
  const res = await axios.delete(`/api/threads/${threadId}`);
  if (res.status === 200) {
    setThreads(
      threads.filter((currentThread) => currentThread.id !== threadId),
    );
  }
};

const ThreadActions = ({
  threadId,
  userHasWorkspaceId,
  threads,
  setThreads,
  setUpdateState,
}: Props): JSX.Element => {
  const ButtonRef = useRef(null);
  const [modalState, setModalState] = useState(false);

  const [xWidth, yHeight] = useRefLocate(ButtonRef, 50);

  const user = useRecoilValue(userState);

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
          onClick={() => {
            deleteMessage(threadId, threads, setThreads);
          }}
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
          width={20}
          height={20}
          onClick={() => {}}
          icon={BsEmojiSmile}
        />
        <ActionButton
          width={20}
          height={20}
          onClick={() => {}}
          icon={BiMessageRoundedDetail}
        />
        <ActionButton
          width={20}
          height={20}
          onClick={() => {}}
          icon={RiShareForwardLine}
        />
        <ActionButton
          width={20}
          height={20}
          onClick={() => {}}
          icon={BsBookmark}
        />
        <ActionButton
          customRef={ButtonRef}
          width={20}
          height={20}
          onClick={() => setModalState(true)}
          icon={BiDotsVerticalRounded}
        />
      </ThreadActionsGroup>
      <ActionsMenu
        xWidth={xWidth - 250}
        yHeight={yHeight}
        isOpened={modalState}
        onClose={() => setModalState(false)}
        customRef={ButtonRef}
      >
        {userHasWorkspaceId === user.userHasWorkspaceId
          ? myMessageActionMenus
          : otherMessageActionMenus}
      </ActionsMenu>
    </Container>
  );
};

export default ThreadActions;
