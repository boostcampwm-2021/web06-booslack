import { Message } from '@global/type';
import { IreplyToggle } from '@state/workspace';

export const checkIsInReplySide = (
  messageObject: Message,
  replyToggle: IreplyToggle,
): boolean => {
  // 현재 메시지 객체의 스레드 아이디가 존재한다면 리플라이이고
  // 없더라도 replyToggle.message?.id === messageObject.id 라면 오른쪽 사이드바에 띄어져 있는 스레드이다.
  return (
    messageObject.threadId !== undefined ||
    replyToggle.message?.id === messageObject.id
  );
};
