import React, { useState, useEffect } from 'react';
import EmojiPopup from '@molecules/EmojiPopup';
import MentionPopup from '@molecules/MentionPopup';
import {
  keydownHandle,
  inputHandle,
  makeEmoji,
  makeMention,
} from '@global/util/inputEventHandlers';
import { Container } from './styles';

const ChatInputBackGround = (): JSX.Element => {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [isMentionOpen, setIsMentionOpen] = useState(false);
  const [input, setInput] = useState('');
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    if (!value) return;
    if (isEmojiOpen) makeEmoji(value);
    else if (isMentionOpen) makeMention(value);
    setInput('');
    setValue(undefined);
  }, [value]);

  return (
    <Container>
      <div
        id="input-bar"
        role="textbox"
        contentEditable="true"
        tabIndex={0}
        aria-multiline="true"
        aria-autocomplete="list"
        onKeyDown={(e) =>
          keydownHandle(
            e,
            input,
            setInput,
            value,
            setValue,
            isEmojiOpen,
            setIsEmojiOpen,
            isMentionOpen,
            setIsMentionOpen,
          )
        }
        onInput={(e) =>
          inputHandle(
            e,
            input,
            setInput,
            value,
            setValue,
            isEmojiOpen,
            setIsEmojiOpen,
            isMentionOpen,
            setIsMentionOpen,
          )
        }
        suppressContentEditableWarning="true"
      >
        <p>
          <br />
        </p>
      </div>
      <EmojiPopup
        input={input}
        isOpen={isEmojiOpen}
        value={value}
        setValue={setValue}
        close={() => setIsEmojiOpen(false)}
      />
      <MentionPopup
        input={input}
        isOpen={isMentionOpen}
        value={value}
        setValue={setValue}
        close={() => setIsMentionOpen(false)}
      />
    </Container>
  );
};

export default ChatInputBackGround;
