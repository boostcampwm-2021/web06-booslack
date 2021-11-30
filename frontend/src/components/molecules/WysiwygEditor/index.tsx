import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import EmojiPopup from '@molecules/EmojiPopup';
import MentionPopup from '@molecules/MentionPopup';
import { shouldScrollDownState } from '@state/thread';
import userState from '@state/user';
import {
  keydownHandle,
  inputHandle,
  makeEmoji,
  makeMention,
  keyPressHandle,
} from '@global/util/inputEventHandlers';
import { Container, MessageInputArea } from './styles';

interface Props {
  message: string;
  setMessage: (message: string) => void;
  setFocused: (focused: boolean) => void;
  messageClear: boolean;
  setMessageClear: (messageClear: boolean) => void;
  defaultMessage?: string;
  selectedFile: [];
  setSelectedFile: Dispatch<SetStateAction<[]>>;
  setSelectedFileUrl: Dispatch<SetStateAction<[]>>;
  onSendClick;
}

const WysiwygEditor = ({
  message,
  setMessage,
  setFocused,
  messageClear,
  setMessageClear,
  defaultMessage,
  selectedFile,
  setSelectedFile,
  setSelectedFileUrl,
  onSendClick,
}: Props): JSX.Element => {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [isMentionOpen, setIsMentionOpen] = useState(false);
  const [input, setInput] = useState('');
  const [value, setValue] = useState(undefined);

  const { channelId }: { channelId: string } = useParams();
  const user = useRecoilValue(userState);
  const setShouldScrollDown = useSetRecoilState(shouldScrollDownState);

  const editor = useRef();
  useEffect(() => {
    if (editor.current && messageClear) {
      editor.current.innerHTML = '<p><br></p>';
      setMessageClear(false);
      setMessage('');
    }
  }, [messageClear]);

  useEffect(() => {
    if (!value) return;
    if (isEmojiOpen) {
      makeEmoji(value);
      setMessage(editor.current.innerHTML);
    } else if (isMentionOpen) {
      makeMention(value);
      setMessage(editor.current.innerHTML);
    }
    setInput('');
    setValue(undefined);
  }, [value]);

  const handleOnfocus = () => {
    setFocused(true);
  };

  const handleOnBlur = () => {
    setFocused(false);
  };

  const sendable =
    (message !== undefined &&
      message !== '<p><br></p>' &&
      message.trim().length > 8) ||
    selectedFile?.length > 0;

  return (
    <Container>
      <MessageInputArea
        id="input-bar"
        role="textbox"
        contentEditable="true"
        tabIndex={0}
        aria-multiline="true"
        aria-autocomplete="list"
        onKeyPress={(e) =>
          keyPressHandle(
            e,
            isEmojiOpen,
            isMentionOpen,
            onSendClick,
            sendable,
            user,
            channelId,
            message,
            setMessageClear,
            setMessage,
            selectedFile,
            setSelectedFile,
            setSelectedFileUrl,
            setShouldScrollDown,
          )
        }
        onKeyDown={(e) => keydownHandle(e)}
        onInput={(e) =>
          inputHandle(e, setInput, setIsEmojiOpen, setIsMentionOpen, setMessage)
        }
        suppressContentEditableWarning="true"
        onFocus={handleOnfocus}
        onBlur={handleOnBlur}
        ref={editor}
        dangerouslySetInnerHTML={{ __html: defaultMessage }}
      />
      {isEmojiOpen && (
        <EmojiPopup
          input={input}
          isOpen={isEmojiOpen}
          value={value}
          setValue={setValue}
          close={() => setIsEmojiOpen(false)}
        />
      )}
      {isMentionOpen && (
        <MentionPopup
          input={input}
          isOpen={isMentionOpen}
          value={value}
          setValue={setValue}
          close={() => setIsMentionOpen(false)}
        />
      )}
    </Container>
  );
};

WysiwygEditor.defaultProps = {
  defaultMessage: '<p><br /></p>',
};

export default WysiwygEditor;
