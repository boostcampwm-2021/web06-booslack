/* eslint-disable @typescript-eslint/ban-ts-comment */
import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import WorkspaceRepository from '../repository/WorkspaceRepository';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';
import generateUniqSerial from '../shared/simpleuuid';

const { CONFLICT, BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getAllWorkspaces(req: Request, res: Response) {
  const workspaces = await getCustomRepository(WorkspaceRepository).find();
  return res.status(OK).json({ workspaces });
}

export async function getAllUserWorkspaces(req: Request, res: Response) {
  try {
    // @ts-ignore
    const user = req.session.passport?.user;
    const userId = user ? user[0].id : user;

    if (!userId) {
      throw BAD_REQUEST;
    }

    const subquery = getCustomRepository(UserHasWorkspaceRepository)
      .createQueryBuilder('usercount')
      .select('usercount.workspaceId', 'id')
      .addSelect('COUNT(*)', 'count')
      .groupBy('usercount.workspaceId');

    const workspaces = await getCustomRepository(UserHasWorkspaceRepository)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.workspace', 'workspace')
      .select('workspace.name', 'name')
      .addSelect('user.workspaceId', 'id')
      // eslint-disable-next-line max-len
      .leftJoinAndSelect(`( ${subquery.getQuery()} )`, 'jointable', 'user.workspaceId = jointable.id')
      .where('user.userId = :userId', { userId })
      .getRawMany();

    console.log([...workspaces]);

    return res.status(OK).json({ workspaces: [...workspaces] });
  } catch (error) {
    console.log(error);
    return res.status(BAD_REQUEST).json(error);
  }
}

export async function getOneWorkspace(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const workspace = await getCustomRepository(WorkspaceRepository).findOne(id);
    return res.status(OK).json({ workspace });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addUserToWorkspace(req: Request, res: Response) {
  try {
    // @ts-ignore
    const user = req.session.passport?.user;
    const userId = user ? user[0].id : user;
    const { code }: { code: string } = req.body;

    if (!userId || !code) {
      throw BAD_REQUEST;
    }

    const Workspace = await getCustomRepository(WorkspaceRepository).findOneOrFail({
      where: [{ code }],
    });

    if (!Workspace?.id) {
      throw BAD_REQUEST;
    }

    const userHasWorkSpace = { userId, workspaceId: Workspace.id };
    const isExist = await getCustomRepository(UserHasWorkspaceRepository).findOne({
      where: [{ ...userHasWorkSpace }],
    });

    if (isExist) return res.status(CONFLICT).json({ error: 'you are already joined' });

    await getCustomRepository(UserHasWorkspaceRepository).save(userHasWorkSpace);
    return res.status(CREATED).end();
  } catch (error) {
    return res.status(BAD_REQUEST).end();
  }
}

export async function addOneWorkspace(req: Request, res: Response) {
  try {
    // @ts-ignore
    const user = req.session.passport?.user;
    const userId = user ? user[0].id : user;

    if (!userId) {
      throw BAD_REQUEST;
    }

    const { name, description: profile } = req.body;

    if (!name || !profile) {
      throw BAD_REQUEST;
    }

    const workspace = { name, profile, code: generateUniqSerial() };

    // eslint-disable-next-line no-constant-condition
    while (true) {
      // eslint-disable-next-line no-await-in-loop
      const existCode = await getCustomRepository(WorkspaceRepository).find({
        where: [{ code: workspace.code }],
      });
      if (existCode.length <= 0) break;

      workspace.code = generateUniqSerial();
    }

    const { id: workspaceId } = await getCustomRepository(WorkspaceRepository).save(workspace);

    const userHasWorkSpace = { userId, workspaceId };

    await getCustomRepository(UserHasWorkspaceRepository).save(userHasWorkSpace);

    return res.status(CREATED).json({
      code: workspace.code,
    });
  } catch (error) {
    return res.status(BAD_REQUEST).json({
      error,
    });
  }
}

export async function updateOneWorkspace(req: Request, res: Response) {
  const { id } = req.params;
  const { profile, name } = req.body;
  try {
    if (Object.keys(req.body).length === 0) throw new Error('no workspace data in body');
    const workspaceById = await getCustomRepository(WorkspaceRepository).findOneOrFail(id);
    workspaceById.profile = profile || workspaceById.profile;
    workspaceById.name = name || workspaceById.name;
    const workspace = await getCustomRepository(WorkspaceRepository).save(workspaceById);
    return res.status(OK).json({ workspace });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteOneWorkspace(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const workspace = await getCustomRepository(WorkspaceRepository).findOneOrFail(id);
    await getCustomRepository(WorkspaceRepository).remove(workspace);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
