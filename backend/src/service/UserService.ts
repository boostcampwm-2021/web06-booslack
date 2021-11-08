import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../model/User';

const { BAD_REQUEST, OK } = StatusCodes;

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await getRepository(User).find();
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function getOneUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const users = await getRepository(User).findOne(id);
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateOneUser(req: Request, res: Response) {
  const { id } = req.params;
  const { nickname, email, type } = req.body;

  try {
    if (Object.keys(req.body).length === 0)
      throw new Error('no user data in body');
    const userById = await getRepository(User).findOneOrFail(id);
    userById.nickname = nickname || userById.nickname;
    userById.email = email || userById.email;
    userById.type = type || userById.type;
    const users = await getRepository(User).save(userById);
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addOneUser(req: Request, res: Response) {
  const user = req.body;
  try {
    if (Object.keys(user).length === 0) throw new Error('no user data in body');
    const users = await getRepository(User).save(user);
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteOneUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getRepository(User).findOneOrFail(id);
    await getRepository(User).remove(user);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
