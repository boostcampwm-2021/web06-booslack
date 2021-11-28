import { useAbstractQueryList } from './useAbstract';

export const useReplyListQuery = (threadId: string) => {
  return useAbstractQueryList('replys', threadId, { threadId });
};
