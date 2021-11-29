import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { DeepPartial, getCustomRepository, getManager } from 'typeorm';
import UserRepository from '../repository/UserRepository';
import WorkspaceRepository from '../repository/WorkspaceRepository';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';
import UserHasWorkspace from '../model/UserHasWorkspace';
import User from '../model/User';

const { BAD_REQUEST, OK } = StatusCodes;

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await getCustomRepository(UserRepository).find();
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function getOneUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const users = await getCustomRepository(UserRepository).findOne(id);
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function findOneUser(req: Request, res: Response) {
  const { username, password } = req.query;
  try {
    const user = await getCustomRepository(UserRepository).findOne({
      where: { account: username, password },
    });
    return res.status(OK).json((user) ?? { message: 'error' });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateOneUser(req: Request, res: Response) {
  const { id } = req.params;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { account, email, isLocal, password, theme } = req.body;
  try {
    if (Object.keys(req.body).length === 0) throw new Error('no user data in body');
    const userById = await getCustomRepository(UserRepository).findOneOrFail(id);
    userById.account = account || userById.account;
    userById.email = email || userById.email;
    userById.local = isLocal || userById.local;
    userById.password = password || userById.password;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    userById.theme = theme || userById.theme;
    const users = await getCustomRepository(UserRepository).save(userById);
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addOneUser(req: Request, res: Response) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const user: DeepPartial<User> = req.body;
  try {
    if (Object.keys(user).length === 0) throw new Error('no user data in body');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const users = await getCustomRepository(UserRepository).save(user);
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteOneUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getCustomRepository(UserRepository).findOneOrFail(id);
    await getCustomRepository(UserRepository).remove(user);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteUserFromChannel(req: Request, res: Response) {
  try {
    const { workspaceId, channelId } = req.params;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const user = req.session.passport?.user;
    const userId = user ? user[0].id : user;

    if (!userId) {
      throw BAD_REQUEST;
    }

    const userhasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).findOneOrFail({
      where: [{ workspaceId, userId }],
    });

    const entityManager = getManager();
    await entityManager.query(`
      DELETE from booslack.user_has_workspace_channel
      where booslack.user_has_workspace_channel.userhasWorkspaceId = '${userhasWorkspace.id}'
      and booslack.user_has_workspace_channel.channelId = '${channelId}';    
    `);

    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).end();
  }
}

export async function addUserToWorkspace(req: Request, res: Response) {
  try {
    const { userId, workspaceId } = req.body;
    // bind with promise all
    const user = await getCustomRepository(UserRepository).findOne({
      where: [{ id: userId }],
    });
    const workspace = await getCustomRepository(WorkspaceRepository).findOne({
      where: [{ id: workspaceId }],
    });

    if (!user) {
      throw new Error(`user ${userId} does not exist`);
    }
    if (!workspace) {
      throw new Error(`workspace ${workspaceId} does not exist`);
    }

    const userHasWorkspace: UserHasWorkspace = new UserHasWorkspace();
    userHasWorkspace.description = '';
    userHasWorkspace.nickname = user.account;
    userHasWorkspace.workspaceId = Number(workspaceId);
    userHasWorkspace.userId = Number(userId);
    userHasWorkspace.workspace = workspace;
    userHasWorkspace.user = user;

    await getCustomRepository(UserHasWorkspaceRepository).save(userHasWorkspace);
    return res.status(OK).json({ userHasWorkspace });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function getAllUsersWithChannelInfo(req: Request, res: Response) {
  try {
    const { workspaceId, channelId } = req.query;
    const users = await getCustomRepository(UserRepository).findAllUsersWithChannelInfo(
      String(workspaceId),
      String(channelId),
    );
    return res.status(OK).json({ users });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
