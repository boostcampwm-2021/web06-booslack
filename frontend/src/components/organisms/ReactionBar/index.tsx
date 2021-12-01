import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import EmojiModal from '@organisms/EmojiModal';
import useRefLocate from '@hook/useRefLocate';
import userState, { IUserState } from '@state/user';
import { Reaction } from '@global/type';
import { onEmojiSet } from '@global/util/reaction';
import { IreplyToggle, replyToggleState } from '@state/workspace';
import {
  deleteReaction,
  deleteReplyReaction,
  postReaction,
  postReplyReaction,
} from '@global/api/reaction';
import { Container, ReactionAddButton, StyledLabeledButton } from './styles';

interface Props {
  isReply: boolean;
  reactions: Reaction[];
}

const checkUserReacted = (reaction, user: IUserState): Reaction => {
  const reacted = reaction.list.find((eachReaction) => {
    if (eachReaction.userHasWorkspaceId === user.userHasWorkspaceId) {
      return true;
    }
    return false;
  });
  return reacted;
};

const handleEmojiClick = (
  isReply: boolean,
  reactionMap,
  user: IUserState,
  channelId: string,
  replyToggle: IreplyToggle,
) => {
  const reacted = checkUserReacted(reactionMap, user);
  if (reacted) {
    if (isReply) {
      deleteReplyReaction(
        reacted.id,
        channelId,
        replyToggle?.message.id,
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
      String(reactionMap.emoji),
      String(reactionMap.list[0].replyId),
      replyToggle?.message.id,
      user.socket,
    );
  } else {
    postReaction(
      user.userHasWorkspaceId,
      channelId,
      String(reactionMap.emoji),
      String(reactionMap.list[0].threadId),
      user.socket,
    );
  }
};

const ReactionBar = ({ isReply, reactions }: Props): JSX.Element => {
  const user = useRecoilValue(userState);
  const { channelId }: { channelId: string } = useParams();
  const replyToggle = useRecoilValue(replyToggleState);
  const currentReplyId = reactions[0].replyId;
  const currentThreadId =
    currentReplyId === null ? reactions[0].threadId : replyToggle?.message?.id;

  const emojiButtonRef = useRef(null);
  const [emojiXWidth, emojiYHeight] = useRefLocate(emojiButtonRef, 50);
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const reactionList = [];
  reactions.forEach((reaction) => {
    const temp = reactionList.find(
      (reactionMap) => reactionMap.emoji === reaction.emoji,
    );

    if (temp !== undefined) {
      temp.list.push(reaction);
    } else {
      reactionList.push({ emoji: reaction.emoji, list: [reaction] });
    }
  });

  return (
    <Container>
      {reactionList.map((reaction) => (
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
          user,
          isReply ? currentReplyId : currentThreadId,
          isReply ? currentThreadId : undefined,
          channelId,
        )}
      />
    </Container>
  );
};

export default ReactionBar;
