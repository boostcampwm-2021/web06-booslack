import { postReaction, postReplyReaction } from '@global/api/reaction';
import { IUserState } from '@state/user';

export const onEmojiSet = (
  user: IUserState,
  messageId: number,
  parentThreadId: undefined | number,
  channelId: number,
) => {
  return (emoji: string): void => {
    if (parentThreadId !== undefined) {
      postReplyReaction(
        user.userHasWorkspaceId,
        channelId,
        emoji,
        messageId,
        parentThreadId,
        user.socket,
      );
    } else {
      postReaction(
        user.userHasWorkspaceId,
        channelId,
        emoji,
        messageId,
        user.socket,
      );
    }
  };
};
