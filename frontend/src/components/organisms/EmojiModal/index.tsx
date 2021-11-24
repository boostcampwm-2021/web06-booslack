import Autocomplete from '@atoms/Autocomplete';
import React, { useEffect, useState } from 'react';
import * as unicodeEmoji from 'unicode-emoji';
import EmojiPopupTemplate from './EmojiPopupTemplate';
import { StyledPopup, InputContainer, StyledInput } from './styles';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const emos = unicodeEmoji.getEmojis();

const EmojiModal = ({ isOpen, close }: Props): JSX.Element => {
  const [emojis, setEmojis] = useState([]);
  const [input, setInput] = useState('');
  const [value, setValue] = useState(undefined);

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
