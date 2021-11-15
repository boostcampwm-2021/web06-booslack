import Autocomplete from '@atoms/Autocomplete';
import React, { Dispatch, useEffect, useState } from 'react';
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

const emos = unicodeEmoji.getEmojis();

const EmojiPopup = ({
  input,
  isOpen,
  value,
  setValue,
  close,
}: Props): JSX.Element => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    setEmojis(emos);
  }, []);

  useEffect(() => {
    if (value) {
      close();
    }
  }, [value]);

  return (
    <StyledPopup isOpen={isOpen} onClose={close}>
      <Autocomplete
        input={input}
        filterList={emojis}
        filter={(emoji) => emoji.description.includes(input)}
        setValue={setValue}
        ResultTemplate={EmojiPopupTemplate}
      />
    </StyledPopup>
  );
};

export default EmojiPopup;
