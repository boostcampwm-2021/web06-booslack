import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import ReplyRepository from '../repository/ReplyRepository';
import File from '../model/File';
import Reply from '../model/Reply';
import FileRepository from '../repository/FileRepository';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';
import ThreadRepository from '../repository/ThreadRepository';

const { BAD_REQUEST, OK } = StatusCodes;

export async function getAllReplys(req: Request, res: Response) {
  try {
    const { threadId } = req.query;

    const replys = await getCustomRepository(ReplyRepository).find({
      relations: ['userHasWorkspace', 'reactions', 'files'],
      where: [{ threadId }],
    });
    return res.status(OK).json({ replys });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function getReply(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const reply = await getCustomRepository(ReplyRepository).findOne({
      relations: ['userHasWorkspace', 'thread', 'reactions'],
      where: [{ id }],
    });
    return res.status(OK).json({ reply });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateReply(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { message, files } = req.body;

    if (Object.keys(req.body).length === 0) throw new Error('no reply data in body');

    const replyById = await getCustomRepository(ReplyRepository).findOneOrFail(id);
    replyById.message = message || replyById.message;
    replyById.files = files || replyById.files;
    const reply = await getCustomRepository(ReplyRepository).save(replyById);

    return res.status(OK).json({ reply });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addReply(req: Request, res: Response) {
  try {
    const { message, threadId, userHasWorkspaceId } = req.body;

    const thread = await getCustomRepository(ThreadRepository).findOne({
      where: [{ id: threadId }],
    });

    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).findOne({
      where: [{ id: userHasWorkspaceId }],
    });

    if (!thread) {
      throw new Error(`channel ${threadId} does not exist`);
    }
    if (!userHasWorkspace) {
      throw new Error(`userHasWorkspace ${userHasWorkspaceId} does not exist`);
    }

    const reply: Reply = new Reply();
    reply.message = message ?? reply.message;
    reply.thread = thread ?? reply.thread;
    reply.userHasWorkspace = userHasWorkspace ?? reply.userHasWorkspace;
    reply.threadId = Number(threadId) ?? reply.threadId;
    reply.userHasWorkspaceId = Number(userHasWorkspaceId) ?? reply.userHasWorkspaceId;

    await getCustomRepository(ReplyRepository).save(reply);
    return res.status(OK).json({ reply });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteReply(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const reply = await getCustomRepository(ReplyRepository).findOneOrFail(id);
    await getCustomRepository(FileRepository).delete({ replyId: Number(reply.id) });
    await getCustomRepository(ReplyRepository).remove(reply);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function getPartialReplysByThreadId(req: Request, res: Response) {
  try {
    const { threadId, cursor } = req.query;

    const replysDesc = await getCustomRepository(ReplyRepository)
      .createQueryBuilder('reply')
      .leftJoinAndSelect('reply.userHasWorkspace', 'userHasWorkspace')
      .leftJoinAndSelect('reply.thread', 'thread')
      .leftJoinAndSelect('reply.reactions', 'reaction')
      .where('reply.threadId = :id AND reply.id < :cursor', { id: threadId, cursor })
      .orderBy('reply.id', 'DESC')
      .limit(20)
      .getMany();

    const replys = replysDesc.reverse();
    return res.status(OK).json({ replys });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateReplyAndFiles(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { files } = req.body;
    const fileList: Array<any> = files;

    if (Object.keys(req.body).length === 0) throw new Error('no reply data in body');
    fileList.map(async (file: any) => {
      const fileId: number = file?.id;
      const fileById: any = await getRepository(File).findOneOrFail(fileId);
      fileById.replyId = Number(id) ?? fileById.replyId;
      const FileById = await getRepository(File).save(fileById);
      if (!FileById) throw new Error('no File data in body');
    });

    const replyById = await getCustomRepository(ReplyRepository).findOneOrFail(id);
    replyById.files = files || replyById.files;
    const reply = await getCustomRepository(ReplyRepository).save(replyById);

    return res.status(OK).json({ reply });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
