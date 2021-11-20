import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';

const { BAD_REQUEST, OK } = StatusCodes;

export async function getUserHasWorkspace(req: Request, res: Response) {
  try {
    const { userId, workspaceId } = req.query;

    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).findOne({
      where: [{ userId, workspaceId }],
    });

    if (!userHasWorkspace) {
      throw new Error(
        `userHasWorkspace with user ${userId} and workspace ${workspaceId} does not exist`,
      );
    }

    return res.status(OK).json({ userHasWorkspace });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function updateUserHasWorkspace(req: Request, res: Response) {
  try {
    const { userHasWorkspaceId } = req.params;
    const { nickname, description, theme, fileId } = req.body;

    const userHasWorkspaceById = await getCustomRepository(
      UserHasWorkspaceRepository,
    ).findOneOrFail(userHasWorkspaceId);

    userHasWorkspaceById.nickname = nickname || userHasWorkspaceById.nickname;
    userHasWorkspaceById.description = description || userHasWorkspaceById.description;
    userHasWorkspaceById.theme = theme || userHasWorkspaceById.theme;
    userHasWorkspaceById.fileId = fileId || userHasWorkspaceById.fileId;

    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).save(
      userHasWorkspaceById,
    );

    return res.status(OK).json({ userHasWorkspace });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
