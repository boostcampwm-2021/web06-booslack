import React, { useState, useEffect } from 'react';
import EmojiPopup from '@molecules/EmojiPopup';
import MentionPopup from '@molecules/MentionPopup';
import {
  keydownHandle,
  inputHandle,
  makeEmoji,
  makeMention,
} from '@global/util/inputEventHandlers';
import { Container, MessageInputArea } from './styles';

interface Props {
  message: string;
  setMessage: (message: string) => void;
  setFocused: (focused: boolean) => void;
}

const WysiwygEditor = ({
  message,
  setMessage,
  setFocused,
}: Props): JSX.Element => {
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

  const handleOnfocus = () => {
    setFocused(true);
  };

  const handleOnBlur = () => {
    setFocused(false);
  };

  return (
    <Container>
      <MessageInputArea
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
            setMessage,
          )
        }
        suppressContentEditableWarning="true"
        onFocus={handleOnfocus}
        onBlur={handleOnBlur}
        dangerouslySetInnerHTML={{ __html: message }}
      ></MessageInputArea>
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

export default WysiwygEditor;
