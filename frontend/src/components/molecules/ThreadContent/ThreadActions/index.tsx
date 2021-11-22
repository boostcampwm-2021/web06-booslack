import React from 'react';
import { BsEmojiSmile, BsBookmark } from 'react-icons/bs';
import { BiMessageRoundedDetail, BiDotsVerticalRounded } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { Container, ThreadActionsGroup, ActionButton } from './styles';

const ThreadActions = (): JSX.Element => {
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
          width={20}
          height={20}
          onClick={() => {}}
          icon={BiDotsVerticalRounded}
        />
      </ThreadActionsGroup>
    </Container>
  );
};

export default ThreadActions;
