import { Router } from 'express';
import {
  getAllWorkspaces,
  getOneWorkspace,
  addOneWorkspace,
  updateOneWorkspace,
  deleteOneWorkspace,
} from '../service/WorkspaceService';

const workspaceRouter = Router();

workspaceRouter.get('/all', getAllWorkspaces);
workspaceRouter.get('/one/:id', getOneWorkspace);
workspaceRouter.post('/add', addOneWorkspace);
workspaceRouter.put('/update/:id', updateOneWorkspace);
workspaceRouter.delete('/delete/:id', deleteOneWorkspace);

export default workspaceRouter;
