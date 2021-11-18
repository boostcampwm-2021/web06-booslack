import { Router } from 'express';
import { getUserHasWorkspace, updateUserHasWorkspace } from '@service/UserHasWorkspaceService';

const userHasWorkspaceRouter = Router();

userHasWorkspaceRouter.get('/', getUserHasWorkspace);
userHasWorkspaceRouter.put('/:id', updateUserHasWorkspace);

export default userHasWorkspaceRouter;
