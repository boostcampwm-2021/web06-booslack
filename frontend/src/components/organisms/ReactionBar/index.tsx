import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import EmojiModal from '@organisms/EmojiModal';
import useRefLocate from '@hook/useRefLocate';
import userState from '@state/user';
import { deleteReaction, postReaction } from '@global/api/reaction';
import { Container, ReactionAddButton, StyledLabeledButton } from './styles';

interface Props {
  reactionList: unknown[];
}

const handleEmojiClick = (reaction, user, channelId) => {
  const temp = reaction.list.find((eachReaction) => {
    if (eachReaction.userHasWorkspaceId === user.userHasWorkspaceId) {
      return true;
    }
    return false;
  });
  temp
    ? deleteReaction(temp.id, channelId, user.socket)
    : postReaction(
        user.userHasWorkspaceId,
        channelId,
        reaction.emoji,
        reaction.list[0].threadId,
        user.socket,
      );
};

const ReactionBar = ({ reactionList }: Props): JSX.Element => {
  const user = useRecoilValue(userState);
  const { channelId }: { channelId: string } = useParams();

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
          key={reaction.emoji}
          onClick={() => {
            handleEmojiClick(reaction, user, channelId);
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
      />
    </Container>
  );
};

export default ReactionBar;
