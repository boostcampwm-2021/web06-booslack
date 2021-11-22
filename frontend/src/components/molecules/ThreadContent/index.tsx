import React, { useState } from 'react';
import ImageButton from '@atoms/ImageButton';
import defaultPerson from '@global/image/default_account.png';
import ThreadActions from './ThreadActions';
import {
  Container,
  MessageKit,
  MessageKitLeft,
  MessageKitRight,
  MessageSender,
  MessageTimestamp,
  MessageText,
} from './styles';

interface Props {
  nickname: string;
  message: string;
  createdTime: string;
}

const ThreadContent = ({
  nickname,
  message,
  createdTime,
}: Props): JSX.Element => {
  const [hoverState, setHoverState] = useState(false);
  const handleHoverIn = () => {
    setHoverState(true);
  };
  const handleHoverOut = () => {
    setHoverState(false);
  };

  return (
    <Container onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
      <MessageKit>
        <MessageKitLeft>
          <ImageButton
            onClick={() => {}}
            height={36}
            width={36}
            image={defaultPerson}
          />
        </MessageKitLeft>
        <MessageKitRight>
          <MessageSender>{nickname}</MessageSender>
          &nbsp; &nbsp;
          <MessageTimestamp>{createdTime}</MessageTimestamp>
          <br />
          <MessageText dangerouslySetInnerHTML={{ __html: message }} />
        </MessageKitRight>
      </MessageKit>
      {hoverState && <ThreadActions />}
    </Container>
  );
};

export default ThreadContent;
