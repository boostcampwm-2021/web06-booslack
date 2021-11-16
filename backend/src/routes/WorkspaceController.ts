import { Router } from 'express';
import {
  getAllWorkspaces,
  getOneWorkspace,
  addOneWorkspace,
  updateOneWorkspace,
  deleteOneWorkspace,
  getAllUserWorkspaces,
  addUserToWorkspace,
} from '../service/WorkspaceService';

const workspaceRouter = Router();
workspaceRouter.post('/code', addUserToWorkspace);
workspaceRouter.get('/user', getAllUserWorkspaces);
workspaceRouter.get('/', getAllWorkspaces);
workspaceRouter.get('/:id', getOneWorkspace);
workspaceRouter.post('/', addOneWorkspace);
workspaceRouter.put('/:id', updateOneWorkspace);
workspaceRouter.delete('/:id', deleteOneWorkspace);

export default workspaceRouter;
