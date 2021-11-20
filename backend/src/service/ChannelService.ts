import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ChannelRepository, { SortOption } from '../repository/ChannelRepository';
import paramMissingError from '../shared/constants';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';
import WorkspaceRepository from '../repository/WorkspaceRepository';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getAllChannels(req: Request, res: Response) {
  try {
    const { offsetStart, sortOption, like, workspaceId } = req.query;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const user = req.session.passport?.user;
    const userId = user ? user[0].id : user;

    if (!userId) {
      throw BAD_REQUEST;
    }
    const VaildUser = await getCustomRepository(UserHasWorkspaceRepository).findOneOrFail({
      where: [{ userId, workspaceId }],
    });

    if (!VaildUser) {
      throw BAD_REQUEST;
    }

    const channels = await getCustomRepository(ChannelRepository).findByOffset(
      userId as string,
      workspaceId as string,
      offsetStart as unknown as number,
      sortOption as unknown as SortOption,
      like as string,
    );

    const count = channels ? channels[0]?.full_count : 0;

    return res.status(OK).json({ count, channels });
  } catch (error) {
    return res.status(BAD_REQUEST).end();
  }
}

export async function getOneChannel(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const channel = await getCustomRepository(ChannelRepository).findOne(id);
    return res.status(OK).json({ channel });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addOneChannel(req: Request, res: Response) {
  try {
    const channel = req.body;
    if (!channel) {
      return res.status(BAD_REQUEST).json({
        error: paramMissingError,
      });
    }

    const workspace = await getCustomRepository(WorkspaceRepository).findOne({
      where: [{ id: channel.workspaceId }],
    });

    if (!workspace) {
      throw new Error(`workspace ${channel.workspaceId} does not exist`);
    }

    channel.workspace = workspace;
    const ChannelRepo = getCustomRepository(ChannelRepository);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const newChannel = await ChannelRepo.save(ChannelRepo.create(channel));

    return res.status(CREATED).json({ channel: newChannel });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateOneChannel(req: Request, res: Response) {
  const { id } = req.params;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { name, isPrivate, description } = req.body;
  try {
    if (Object.keys(req.body).length === 0) throw new Error('no channel data in body');
    const channelById = await getCustomRepository(ChannelRepository).findOneOrFail(id);
    channelById.name = name || channelById.name;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    channelById.private = isPrivate || channelById.private;
    channelById.description = description || channelById.description;
    const channel = await getCustomRepository(ChannelRepository).save(channelById);
    return res.status(OK).json({ channel });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteOneChannel(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const channel = await getCustomRepository(ChannelRepository).findOneOrFail(id);
    await getCustomRepository(ChannelRepository).remove(channel);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addUserToChannel(req: Request, res: Response) {
  try {
    const { userId, workspaceId, channelId } = req.body;
    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).findOne({
      where: [{ userId, workspaceId }],
    });
    const channel = await getCustomRepository(ChannelRepository).findOne({
      where: [{ id: channelId }],
      relations: ['userHasWorkspaces'],
    });
    if (!channel) {
      throw new Error(`channel ${channelId} does not exist`);
    }
    if (!userHasWorkspace) {
      throw new Error(`user ${userId} does not exist`);
    }
    channel.userHasWorkspaces.push(userHasWorkspace);
    await getCustomRepository(ChannelRepository).save(channel);
    return res.status(OK).json({ channel });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteUserFromChannel(req: Request, res: Response) {
  try {
    const { userId, workspaceId, channelId } = req.query;
    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).findOne({
      where: [{ userId, workspaceId }],
    });
    const channel = await getCustomRepository(ChannelRepository).findOne({
      where: [{ id: channelId }],
      relations: ['userHasWorkspaces'],
    });
    if (!channel) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`channel ${channelId} does not exist`);
    }
    if (!userHasWorkspace) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`user ${userId} does not exist`);
    }
    channel.userHasWorkspaces = channel.userHasWorkspaces.filter(
      (eachUserHasWorkspace: any) => eachUserHasWorkspace.id !== Number(userHasWorkspace.id),
    );
    await getCustomRepository(ChannelRepository).save(channel);
    return res.status(OK).json({ channel });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function getChannelsThatUserIn(req: Request, res: Response) {
  try {
    const { userId, workspaceId } = req.query;
    const channels = await getCustomRepository(ChannelRepository).findChannelsThatUserIn(
      String(userId),
      String(workspaceId),
    );
    return res.status(OK).json({ channels });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
