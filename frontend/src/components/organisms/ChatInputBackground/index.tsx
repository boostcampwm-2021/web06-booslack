import React from 'react';
import { keydownHandle, inputHandle } from '@global/util/inputEventHandlers';
import { Container } from './styles';

const ChatInputBackGround = (): JSX.Element => {
  return (
    <Container>
      <div
        id="input-bar"
        role="textbox"
        contentEditable="true"
        tabIndex={0}
        aria-multiline="true"
        aria-autocomplete="list"
        onKeyDown={keydownHandle}
        onInput={inputHandle}
      >
        <p>
          <br />
        </p>
      </div>
    </Container>
  );
};

export default ChatInputBackGround;
