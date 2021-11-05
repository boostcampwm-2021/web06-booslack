import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ChannelRepository from '../repository/ChannelRepository';
import paramMissingError from '../shared/constants';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getAllChannels(req: Request, res: Response) {
  const { offsetStart } = req.query;

  const CustomRepo = getCustomRepository(ChannelRepository);
  const countRow = CustomRepo.getCount('workspace');

  let channel;
  if (offsetStart) {
    channel = CustomRepo.findByOffset(parseInt(offsetStart as string, 10));
  } else {
    channel = CustomRepo.find({
      relations: ['workspace'],
    });
  }
  const Obj = await Promise.all([countRow, channel]);
  const [count, channels] = Object.entries(Obj).map((ele) => ele[1]);
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
  const { channel } = req.body;

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
