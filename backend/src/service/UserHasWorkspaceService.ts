import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import axios from 'axios';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';

const { BAD_REQUEST, OK } = StatusCodes;

export async function getUserHasWorkspacesByWorkspaceId(req: Request, res: Response) {
  try {
    const { workspaceId } = req.query;

    const userHasWorkspaces = await getCustomRepository(UserHasWorkspaceRepository).find({
      where: [{ workspaceId }],
    });

    return res.status(OK).json({ userHasWorkspaces });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

// should be :id
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
    const { workspaceId } = req.params;
    const { nickname, description, theme, fileId } = req.body;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const user = req.session.passport?.user;
    const userId = user ? user[0].id : user;

    if (!userId) {
      throw BAD_REQUEST;
    }

    const userHasWorkspaceId = await getCustomRepository(UserHasWorkspaceRepository).findOneOrFail({
      where: [{ userId, workspaceId }],
    });

    const userHasWorkspaceById = await getCustomRepository(
      UserHasWorkspaceRepository,
    ).findOneOrFail(userHasWorkspaceId.id);

    userHasWorkspaceById.nickname = nickname || userHasWorkspaceById.nickname;
    userHasWorkspaceById.description = description || userHasWorkspaceById.description;
    userHasWorkspaceById.theme = Number(theme) || userHasWorkspaceById.theme;
    userHasWorkspaceById.fileId = Number(fileId) || userHasWorkspaceById.fileId;

    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).save(
      userHasWorkspaceById,
    );

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    axios.put(`http://${process.env.HOST}:${process.env.PORT}/api/users/${userId}`, {
      theme: userHasWorkspaceById.theme,
    });

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
