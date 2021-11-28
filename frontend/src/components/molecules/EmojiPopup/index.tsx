import React, { Dispatch, useEffect } from 'react';
import * as unicodeEmoji from 'unicode-emoji';
import EmojiPopupTemplate from './EmojiPopupTemplate';
import { StyledPopup } from './styles';

interface Props {
  input: string;
  isOpen: boolean;
  value: any;
  setValue: Dispatch<any>;
  close: () => void;
}

const emojis = unicodeEmoji.getEmojis();

const EmojiPopup = ({
  input,
  isOpen,
  value,
  setValue,
  close,
}: Props): JSX.Element => {
  useEffect(() => {
    if (value) {
      close();
    }
  }, [value]);

  return (
    <StyledPopup isOpen={isOpen} onClose={close}>
      <EmojiPopupTemplate
        matches={emojis.filter((emoji) => emoji.description.includes(input))}
        setValue={setValue}
      />
    </StyledPopup>
  );
};

export default EmojiPopup;
