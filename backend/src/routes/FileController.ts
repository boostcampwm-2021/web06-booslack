import { Router } from 'express';
import Upload from '../config/Upload';
import s3UploadCallback from '../middleware/s3UploadCallback';

const FileRouter = Router();

FileRouter.post('/', Upload.single('img'), s3UploadCallback);

export default FileRouter;
