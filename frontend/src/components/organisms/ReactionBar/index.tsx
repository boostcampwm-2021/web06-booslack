import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import EmojiModal from '@organisms/EmojiModal';
import useRefLocate from '@hook/useRefLocate';
import userState from '@state/user';
import { replyToggleState } from '@state/workspace';
import {
  deleteReaction,
  deleteReplyReaction,
  postReaction,
  postReplyReaction,
} from '@global/api/reaction';
import { Container, ReactionAddButton, StyledLabeledButton } from './styles';

interface Props {
  isReply: boolean;
  reactionList: unknown[];
}

const checkUserReacted = (reaction, user) => {
  const reacted = reaction.list.find((eachReaction) => {
    if (eachReaction.userHasWorkspaceId === user.userHasWorkspaceId) {
      return true;
    }
    return false;
  });
  return reacted;
};

const handleEmojiClick = (isReply, reaction, user, channelId, replyToggle) => {
  const reacted = checkUserReacted(reaction, user);
  if (reacted) {
    if (reacted.replyId) {
      deleteReplyReaction(
        reacted.id,
        channelId,
        replyToggle?.thread.id,
        reacted.replyId,
        user.socket,
      );
    } else {
      deleteReaction(reacted.id, channelId, reacted.threadId, user.socket);
    }
  } else if (isReply) {
    postReplyReaction(
      user.userHasWorkspaceId,
      channelId,
      reaction.emoji,
      reaction.list[0].replyId,
      replyToggle?.thread.id,
      user.socket,
    );
  } else {
    postReaction(
      user.userHasWorkspaceId,
      channelId,
      reaction.emoji,
      reaction.list[0].threadId,
      user.socket,
    );
  }
};

const onEmojiSet = (isReply, user, replyId, threadId, channelId) => {
  return (emoji) => {
    if (isReply) {
      postReplyReaction(
        user.userHasWorkspaceId,
        channelId,
        emoji,
        replyId,
        threadId,
        user.socket,
      );
    } else {
      postReaction(
        user.userHasWorkspaceId,
        channelId,
        emoji,
        replyId,
        user.socket,
      );
    }
  };
};

const ReactionBar = ({ isReply, reactionList }: Props): JSX.Element => {
  const user = useRecoilValue(userState);
  const { channelId }: { channelId: string } = useParams();
  const currentThreadId = reactionList[0].threadId;
  const currentReplyId = reactionList[0].replyId;
  const replyToggle = useRecoilValue(replyToggleState);

  const emojiButtonRef = useRef(null);
  const [emojiXWidth, emojiYHeight] = useRefLocate(emojiButtonRef, 50);
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const reactions = [];
  reactionList.forEach((reaction) => {
    const temp = reactions.find(
      (reactionMap) => reactionMap.emoji === reaction.emoji,
    );
    temp
      ? temp.list.push(reaction)
      : reactions.push({ emoji: reaction.emoji, list: [reaction] });
  });

  return (
    <Container>
      {reactions.map((reaction) => (
        <StyledLabeledButton
          className={checkUserReacted(reaction, user) && 'reacted'}
          key={reaction.emoji}
          onClick={() => {
            handleEmojiClick(isReply, reaction, user, channelId, replyToggle);
          }}
          text={`${reaction.emoji}  ${reaction.list.length}`}
        />
      ))}
      <ReactionAddButton
        onClick={() => {
          setIsEmojiOpen(true);
        }}
        icon={BsEmojiSmileUpsideDown}
        fontSize={16}
        customRef={emojiButtonRef}
      />
      <EmojiModal
        customRef={emojiButtonRef}
        xWidth={emojiXWidth}
        yHeight={emojiYHeight}
        isOpen={isEmojiOpen}
        close={() => setIsEmojiOpen(false)}
        onEmojiSet={onEmojiSet(
          isReply,
          user,
          isReply ? currentReplyId : currentThreadId,
          replyToggle.thread?.id,
          channelId,
        )}
      />
    </Container>
  );
};

export default ReactionBar;
