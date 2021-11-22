import { Request, Response } from 'express';

const s3UploadCallback = (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const payLoad = { url: req.file.location };
    res.status(202).json(payLoad);
  } catch (e) {
    res.status(500);
  }
};

export default s3UploadCallback;
