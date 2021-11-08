import { Router } from 'express';
import {
  getAllWorkspaces,
  getOneWorkspace,
  addOneWorkspace,
  updateOneWorkspace,
  deleteOneWorkspace,
} from '../service/WorkspaceService';

const workspaceRouter = Router();

workspaceRouter.get('/', getAllWorkspaces);
workspaceRouter.get('/:id', getOneWorkspace);
workspaceRouter.post('/', addOneWorkspace);
workspaceRouter.put('/:id', updateOneWorkspace);
workspaceRouter.delete('/:id', deleteOneWorkspace);

export default workspaceRouter;
