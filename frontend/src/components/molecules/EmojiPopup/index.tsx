import React, { Dispatch, RefObject, useEffect, useRef } from 'react';
import * as unicodeEmoji from 'unicode-emoji';
import EmojiPopupTemplate from './EmojiPopupTemplate';
import { StyledPopup } from './styles';

interface Props {
  input: string;
  isOpen: boolean;
  value: any;
  setValue: Dispatch<any>;
  close: () => void;
  customRef: RefObject<HTMLElement>;
  xWidth: number;
  yHeight: number;
}

const emojis = unicodeEmoji.getEmojis();

const EmojiPopup = ({
  input,
  isOpen,
  value,
  setValue,
  close,
  customRef,
  xWidth,
  yHeight,
}: Props): JSX.Element => {
  useEffect(() => {
    if (value) {
      close();
    }
  }, [value]);

  return (
    <StyledPopup
      xWidth={xWidth}
      yHeight={yHeight - 300}
      customRef={customRef}
      isOpened={isOpen}
      onClose={close}
    >
      <EmojiPopupTemplate
        matches={emojis.filter((emoji) => emoji.description.includes(input))}
        setValue={setValue}
      />
    </StyledPopup>
  );
};

export default EmojiPopup;
