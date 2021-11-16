import React, { useState, useEffect } from 'react';
import EmojiPopup from '@molecules/EmojiPopup';
import {
  keydownHandle,
  inputHandle,
  makeEmoji,
} from '@global/util/inputEventHandlers';
import { Container } from './styles';

const ChatInputBackGround = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    if (!value) return;
    makeEmoji(value, setValue);
    setInput('');
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
          keydownHandle(e, input, setInput, value, setValue, isOpen, setIsOpen)
        }
        onInput={(e) =>
          inputHandle(e, input, setInput, value, setValue, isOpen, setIsOpen)
        }
        suppressContentEditableWarning="true"
      >
        <p>
          <br />
        </p>
      </div>
      <EmojiPopup
        input={input}
        isOpen={isOpen}
        value={value}
        setValue={setValue}
        close={() => setIsOpen(false)}
      />
    </Container>
  );
};

export default ChatInputBackGround;
