import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { DeepPartial, getCustomRepository } from 'typeorm';
import FileRepository from '../repository/FileRepository';
import File from '../model/File';

const { BAD_REQUEST, OK } = StatusCodes;

export async function getAllFiles(req: Request, res: Response) {
  try {
    const files = await getCustomRepository(FileRepository).find();
    return res.status(OK).json({ files });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function getOneFile(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const files = await getCustomRepository(FileRepository).findOne(id);
    return res.status(OK).json({ files });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateOneFile(req: Request, res: Response) {
  const { id } = req.params;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { name, url, extension, threadId, replyId } = req.body;
  try {
    if (Object.keys(req.body).length === 0) throw new Error('no file data in body');
    const fileById = await getCustomRepository(FileRepository).findOneOrFail(id);
    fileById.name = name || fileById.name;
    fileById.url = url || fileById.url;
    fileById.extension = extension || fileById.extension;
    fileById.threadId = threadId || fileById.threadId;
    fileById.replyId = replyId || fileById.replyId;
    const files = await getCustomRepository(FileRepository).save(fileById);
    return res.status(OK).json({ files });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addOneFile(req: Request, res: Response) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const file: DeepPartial<File> = req.body;
  try {
    if (Object.keys(file).length === 0) throw new Error('no file data in body');
    const files = await getCustomRepository(FileRepository).save(file);
    return res.status(OK).json({ files });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteOneFile(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const file = await getCustomRepository(FileRepository).findOneOrFail(id);
    await getCustomRepository(FileRepository).remove(file);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function uploadFile(req: Request, res: Response) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fileUrl = req.file?.location;
    const fileByUpload: DeepPartial<File> = {
      name: req.file?.originalname,
      url: fileUrl,
      extension: req.file?.fieldname,
    };
    const fileBySave = await getCustomRepository(FileRepository).save(fileByUpload);
    res.status(202).json(fileBySave);
  } catch (e) {
    res.status(500);
  }
}

export function uploadFiles(req: Request, res: Response) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const Files: Array<File> = req.files;
    const fileList: Array<File> = [];
    // eslint-disable-next-line array-callback-return
    Files.map(async (element: File) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { originalname, location, fieldname } = element;
      const fileByUpload: DeepPartial<File> = {
        name: originalname,
        url: location,
        extension: fieldname,
      };
      const file = await getCustomRepository(FileRepository).save(fileByUpload);
      fileList.push(file);
    });
    res.status(202).json(fileList);
  } catch (e) {
    res.status(500);
  }
}
