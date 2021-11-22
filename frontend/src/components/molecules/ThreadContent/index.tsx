import React from 'react';
import ImageButton from '@atoms/ImageButton';
import defaultPerson from '@global/image/default_account.png';
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
  return (
    <Container>
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
          <MessageText>{message}</MessageText>
        </MessageKitRight>
      </MessageKit>
    </Container>
  );
};

export default ThreadContent;
