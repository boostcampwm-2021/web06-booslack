import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import ThreadRepository from '../repository/ThreadRepository';
import ChannelRepository from '../repository/ChannelRepository';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';
import Thread from '../model/Thread';
import FileRepository from '../repository/FileRepository';
import Reply from '../repository/ReplyRepository';

const { BAD_REQUEST, OK } = StatusCodes;

export async function getOneReply(req: Request, res: Response) {
  try {
    const { id } = req.params;
    // 보안이슈
    const reply = await getRepository(Reply).findOne(id);

    return res.status(OK).json({ reply });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateOneReply(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { message } = req.body;

    if (Object.keys(req.body).length === 0) throw BAD_REQUEST;

    const ReplyById = await getRepository(Thread).findOneOrFail(id);
    threadById.message = message || threadById.message;
    const thread = await getRepository(Thread).save(threadById);

    return res.status(OK).json({ thread });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addOneReply(req: Request, res: Response) {
  try {
    const { time, message, channelId, userHasWorkspaceId } = req.body;

    const channel = await getCustomRepository(ChannelRepository).findOne({
      where: [{ id: channelId }],
    });
    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).findOne({
      where: [{ id: userHasWorkspaceId }],
    });

    if (!channel) {
      throw new Error(`channel ${channelId} does not exist`);
    }
    if (!userHasWorkspace) {
      throw new Error(`userHasWorkspace ${userHasWorkspaceId} does not exist`);
    }

    const thread: Thread = new Thread();
    thread.message = message;
    thread.channel = channel;
    thread.channelId = Number(channelId);
    thread.userHasWorkspaceId = Number(userHasWorkspaceId);
    thread.channel = channel;
    thread.userHasWorkspace = userHasWorkspace;

    await getCustomRepository(ThreadRepository).save(thread);
    return res.status(OK).json({ thread });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteOneReply(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const thread = await getRepository(Thread).findOneOrFail(id);
    await getCustomRepository(FileRepository).delete({ threadId: Number(thread.id) });
    await getCustomRepository(ThreadRepository).remove(thread);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
