import Autocomplete from '@atoms/Autocomplete';
import React, { RefObject, useEffect, useState } from 'react';
import * as unicodeEmoji from 'unicode-emoji';
import EmojiPopupTemplate from './EmojiPopupTemplate';
import { StyledPopup, InputContainer, StyledInput } from './styles';

interface Props {
  isOpen: boolean;
  close: () => void;
  customRef: RefObject<HTMLElement>;
  xWidth: number;
  yHeight: number;
  onEmojiSet: (emoji: string) => void;
}

const emos = unicodeEmoji.getEmojis();

const EmojiModal = ({
  xWidth,
  yHeight,
  customRef,
  isOpen,
  close,
  onEmojiSet,
}: Props): JSX.Element => {
  const [emojis, setEmojis] = useState([]);
  const [input, setInput] = useState('');
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    setEmojis(emos);
  }, []);

  useEffect(() => {
    if (value) {
      onEmojiSet(value.emoji);
      close();
    }
  }, [value]);

  return (
    <StyledPopup
      xWidth={xWidth}
      yHeight={yHeight}
      customRef={customRef}
      isOpened={isOpen}
      onClose={close}
    >
      {isOpen && (
        <>
          <InputContainer>
            <StyledInput
              onInput={(e) => {
                setInput(e.target.value);
              }}
            />
          </InputContainer>
          <Autocomplete
            input={input}
            filterList={emojis}
            filter={(emoji) => emoji.description.includes(input)}
            setValue={setValue}
            ResultTemplate={EmojiPopupTemplate}
          />
        </>
      )}
    </StyledPopup>
  );
};

export default EmojiModal;
