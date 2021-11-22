import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import { FILE_LIMIT_SIZE } from '../enum';

const s3 = new AWS.S3({
  endpoint: process.env.NCLOUD_S3_ENDPOINT,
  accessKeyId: process.env.NCLOUD_ACCESS_KEY,
  secretAccessKey: process.env.NCLOUD_SECRET_KEY,
  region: process.env.NCLOUD_REGION,
});

const storage = multerS3({
  s3,
  bucket: process.env.NCLOUD_BUCKET || 'booslack',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
  key: (req, file, callback) => {
    callback(null, file.originalname);
  },
  metadata: (req, file, callback) => {
    callback(null, { fieldName: file.fieldname });
  },
});

const Upload = multer({
  storage,
  limits: { fileSize: FILE_LIMIT_SIZE },
});

export default Upload;
