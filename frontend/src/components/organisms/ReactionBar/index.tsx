import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import EmojiModal from '@organisms/EmojiModal';
import useRefLocate from '@hook/useRefLocate';
import userState from '@state/user';
import { Container, ReactionAddButton, StyledLabeledButton } from './styles';

interface Props {
  reactionList: unknown[];
}

const handleEmojiClick = (reaction, user) => {
  const temp = reaction.list.find(
    (eachReaction) =>
      eachReaction.userHasWorksapceId === user.userHasWorksapceId,
  );
  temp ? '있으면 삭제요청' : '없으면 추가 요청';
};

const ReactionBar = ({ reactionList }: Props): JSX.Element => {
  const user = useRecoilValue(userState);

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
            handleEmojiClick(reaction, user);
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
