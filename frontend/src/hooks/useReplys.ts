import { useAbstractQueryList } from './useAbstract';

export const useReplyListQuery = (_threadId: string) => {
  const threadId = String(_threadId);
  return useAbstractQueryList('replys', threadId, { threadId });
};
