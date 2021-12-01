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
        Number(channelId),
        replyToggle?.message.id,
        reacted.replyId,
        user.socket,
      );
    } else {
      deleteReaction(
        reacted.id,
        Number(channelId),
        reacted.threadId,
        user.socket,
      );
    }
  } else if (isReply) {
    postReplyReaction(
      user.userHasWorkspaceId,
      Number(channelId),
      reactionMap.emoji,
      reactionMap.list[0].replyId,
      reactionMap.list[0].threadId,
      user.socket,
    );
  } else {
    postReaction(
      user.userHasWorkspaceId,
      Number(channelId),
      reactionMap.emoji,
      reactionMap.list[0].threadId,
      user.socket,
    );
  }
};

const ReactionBar = ({ isReply, reactions }: Props): JSX.Element => {
  const user = useRecoilValue(userState);
  const { channelId }: { channelId: string } = useParams();
  const currentThreadId = reactions[0].threadId;
  const currentReplyId = reactions[0].replyId;
  const replyToggle = useRecoilValue(replyToggleState);

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
          replyToggle.message?.id,
          Number(channelId),
        )}
      />
    </Container>
  );
};

export default ReactionBar;
