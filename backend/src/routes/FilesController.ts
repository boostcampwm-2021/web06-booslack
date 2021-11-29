import { Router } from 'express';
import Upload from '../config/Upload';
import {
  getAllFiles,
  getOneFile,
  addOneFile,
  updateOneFile,
  deleteOneFile,
  uploadFile,
  uploadFiles,
  getOneFileByUserHasWorkspaceId,
} from '../service/FilesService';

const FileRouter = Router();

FileRouter.post('/upload', Upload.single('file'), uploadFile);
FileRouter.post('/uploads', Upload.array('file'), uploadFiles);

FileRouter.get('/userhasworkspace/:id', getOneFileByUserHasWorkspaceId);

FileRouter.get('/', getAllFiles);
FileRouter.get('/:id', getOneFile);
FileRouter.post('/', addOneFile);
FileRouter.put('/:id', updateOneFile);
FileRouter.delete('/:id', deleteOneFile);

export default FileRouter;
