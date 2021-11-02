import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import paramMissingError from '@shared/constants';
import { getCustomRepository } from 'typeorm';
import WorkspaceRepository from 'src/repository/WorkspaceRepository';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getAllWorkspaces(req: Request, res: Response) {
  const workspaces = await getCustomRepository(WorkspaceRepository).find();
  return res.status(OK).json({ workspaces });
}

export async function getOneWorkspace(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const workspace = await getCustomRepository(WorkspaceRepository).findOne(
      id
    );
    return res.status(OK).json({ workspace });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addOneWorkspace(req: Request, res: Response) {
  const { workspace } = req.body;
  if (!workspace) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  await getCustomRepository(WorkspaceRepository).save(workspace);
  return res.status(CREATED).end();
}

export async function updateOneWorkspace(req: Request, res: Response) {
  const { id } = req.params;
  const { profile, name } = req.body;
  try {
    if (Object.keys(req.body).length === 0)
      throw new Error('no workspace data in body');
    const workspaceById = await getCustomRepository(
      WorkspaceRepository
    ).findOneOrFail(id);
    workspaceById.profile = profile || workspaceById.profile;
    workspaceById.name = name || workspaceById.name;
    const workspace = await getCustomRepository(WorkspaceRepository).save(
      workspaceById
    );
    return res.status(OK).json({ workspace });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteOneWorkspace(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const workspace = await getCustomRepository(
      WorkspaceRepository
    ).findOneOrFail(id);
    await getCustomRepository(WorkspaceRepository).remove(workspace);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
