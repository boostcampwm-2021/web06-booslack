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
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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
    userHasWorkspaceById.theme = Number(theme) || userHasWorkspaceById.theme;
    userHasWorkspaceById.fileId = Number(fileId) || userHasWorkspaceById.fileId;

    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).save(
      userHasWorkspaceById,
    );

    return res.status(OK).json({ userHasWorkspace });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteUserHasWorkspace(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const user = req.session.passport?.user;
    const userId = user ? user[0].id : user;
    if (!userId || !id) {
      throw BAD_REQUEST;
    }

    const workspace = await getCustomRepository(UserHasWorkspaceRepository).findOneOrFail({
      where: [{ userId, workspaceId: id }],
    });

    await getCustomRepository(UserHasWorkspaceRepository).remove(workspace);
    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
