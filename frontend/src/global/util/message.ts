import { deleteReply } from '@global/api/reply';
import { deleteMessage } from '@global/api/thread';
import { Message } from '@global/type';
import { IreplyToggle } from '@state/workspace';
import { SetterOrUpdater } from 'recoil';
import { Socket } from 'socket.io-client';

export const removeMessage = (
  messageObject: Message,
  replyToggle: IreplyToggle,
  setReplyToggle: SetterOrUpdater<IreplyToggle>,
  channelId: string,
  socket: Socket,
): void => {
  // 메시지 오브젝트가 스레드 아이디가 없으면 쓰레드라는 것임
  if (!messageObject.threadId) {
    // 지우려는 스레드가 현재 사이드에 띄워져 있는거면 닫아야함
    if (replyToggle.message?.id === messageObject.id) {
      setReplyToggle({
        isOpened: false,
        message: undefined,
        channelName: undefined,
      });
    }
    deleteMessage(messageObject.id, channelId, socket);
  } else {
    deleteReply(messageObject.id, replyToggle?.message.id, channelId, socket);
  }
};
