import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import ThreadRepository from '../repository/ThreadRepository';
import ChannelRepository from '../repository/ChannelRepository';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';
import Thread from '../model/Thread';
import FileRepository from '../repository/FileRepository';

const { BAD_REQUEST, OK } = StatusCodes;

export async function getAllThreadsByChannelId(req: Request, res: Response) {
  try {
    const { channelId } = req.query;

    const threads = await getCustomRepository(ThreadRepository)
      .createQueryBuilder('thread')
      .leftJoinAndSelect('thread.userHasWorkspace', 'userHasWorkSpace')
      .leftJoinAndSelect('thread.replys', 'reply')
      .leftJoinAndSelect('thread.reactions', 'reaction')
      .select([
        'thread.id',
        'thread.message',
        'thread.userHasWorkspaceId',
        'reply',
        'thread.createdAt',
        'reaction',
      ])
      .addSelect('userHasWorkSpace.nickname')
      .where('thread.channelId = :channelId', { channelId })
      .getMany();
    return res.status(OK).json({ threads });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function getThread(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // 보안이슈
    const thread = await getRepository(Thread).findOne({
      relations: ['userHasWorkspace', 'replys', 'reactions'],
      where: [{ id }],
    });

    return res.status(OK).json({ thread });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateThread(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { message } = req.body;

    if (Object.keys(req.body).length === 0) throw new Error('no thread data in body');

    const threadById = await getRepository(Thread).findOneOrFail(id);
    threadById.message = message || threadById.message;
    const thread = await getRepository(Thread).save(threadById);

    return res.status(OK).json({ thread });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addThread(req: Request, res: Response) {
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

export async function deleteThread(req: Request, res: Response) {
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
