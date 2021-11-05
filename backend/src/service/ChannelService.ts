import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ChannelRepository, { SortOption } from '../repository/ChannelRepository';
import paramMissingError from '../shared/constants';
import UserRepository from 'src/repository/UserRepository';
import { User } from '@daos/User';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getAllChannels(req: Request, res: Response) {
  const { userId, offsetStart, sortOption, like } = req.query;

  const CustomRepo = getCustomRepository(ChannelRepository);

  let channels;
  let count;
  if (req.query) {
    [channels, count] = await CustomRepo.findByOffset(
      userId as unknown as number,
      parseInt(offsetStart as string, 10),
      sortOption as unknown as SortOption,
      like as string,
    );
  } else {
    [channels, count] = await CustomRepo.findAndCount({
      relations: ['workspace'],
    });
  }

  return res.status(OK).json({ count, channels });
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
  const channel = req.body;
  if (!channel) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  const ChannelRepo = getCustomRepository(ChannelRepository);
  await ChannelRepo.save(ChannelRepo.create(channel));

  return res.status(CREATED).end();
}

export async function updateOneChannel(req: Request, res: Response) {
  const { id } = req.params;
  const { name, type, description } = req.body;
  try {
    if (Object.keys(req.body).length === 0)
      throw new Error('no channel data in body');
    const channelById = await getCustomRepository(
      ChannelRepository,
    ).findOneOrFail(id);
    channelById.name = name || channelById.name;
    channelById.type = type || channelById.type;
    channelById.description = description || channelById.description;
    const channel = await getCustomRepository(ChannelRepository).save(
      channelById,
    );
    return res.status(OK).json({ channel });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteOneChannel(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const channel = await getCustomRepository(ChannelRepository).findOneOrFail(
      id,
    );
    await getCustomRepository(ChannelRepository).remove(channel);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addUserToChannel(req: Request, res: Response) {
  try {
    const { userId, channelId } = req.body;
    const user = await getCustomRepository(UserRepository).findOne(userId);
    const channel = await getCustomRepository(ChannelRepository).findOne({
      where: [{ id: channelId }],
      relations: ['users'],
    });
    if (!channel) {
      throw new Error(`channel ${channelId} does not exist`);
    }
    if (!user) {
      throw new Error(`user ${userId} does not exist`);
    }
    channel.users.push(user);
    await getCustomRepository(ChannelRepository).save(channel);
    return res.status(OK).json({ channel });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteUserFromChannel(req: Request, res: Response) {
  try {
    const { userId, channelId } = req.body;
    const channel = await getCustomRepository(ChannelRepository).findOne({
      where: [{ id: channelId }],
      relations: ['users'],
    });
    if (!channel) {
      throw new Error(`channel ${channelId} does not exist`);
    }
    channel.users = channel.users.filter(
      (eachUser) => eachUser.id !== Number(userId),
    );
    await getCustomRepository(ChannelRepository).save(channel);
    return res.status(OK).json({ channel });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
