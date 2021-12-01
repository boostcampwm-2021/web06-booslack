import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ReactionRepository from '../repository/ReactionRepository';
import ThreadRepository from '../repository/ThreadRepository';
import UserHasWorkspaceRepository from '../repository/UserHasWorkspaceRepository';
import ReplyRepository from '../repository/ReplyRepository';
import Reaction from '../model/Reaction';

const { BAD_REQUEST, OK } = StatusCodes;

export async function addReaction(req: Request, res: Response) {
  try {
    const { threadId, userHasWorkspaceId, emoji } = req.body;

    const thread = await getCustomRepository(ThreadRepository).findOne({
      where: [{ id: threadId }],
    });
    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).findOne({
      where: [{ id: userHasWorkspaceId }],
    });

    if (!thread) {
      throw new Error(`thread ${threadId} does not exist`);
    }
    if (!userHasWorkspace) {
      throw new Error(`userHasWorkspace ${userHasWorkspaceId} does not exist`);
    }

    const reaction: Reaction = new Reaction();
    reaction.emoji = emoji;
    reaction.thread = thread;
    reaction.threadId = Number(threadId);
    reaction.userHasWorkspaceId = Number(userHasWorkspaceId);
    reaction.userHasWorkspace = userHasWorkspace;

    await getCustomRepository(ReactionRepository).save(reaction);
    return res.status(OK).json({ reaction });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function addReplyReaction(req: Request, res: Response) {
  try {
    const { replyId, userHasWorkspaceId, emoji } = req.body;

    const reply = await getCustomRepository(ReplyRepository).findOne({
      where: [{ id: replyId }],
    });
    const userHasWorkspace = await getCustomRepository(UserHasWorkspaceRepository).findOne({
      where: [{ id: userHasWorkspaceId }],
    });

    if (!reply) {
      throw new Error(`channel ${replyId} does not exist`);
    }
    if (!userHasWorkspace) {
      throw new Error(`userHasWorkspace ${userHasWorkspaceId} does not exist`);
    }

    const reaction: Reaction = new Reaction();
    reaction.emoji = emoji;
    reaction.reply = reply;
    reaction.replyId = Number(replyId);
    reaction.userHasWorkspaceId = Number(userHasWorkspaceId);
    reaction.userHasWorkspace = userHasWorkspace;

    await getCustomRepository(ReactionRepository).save(reaction);
    return res.status(OK).json({ reaction });
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteReplyReaction(req: Request, res: Response) {
  try {
    const { replyId, reactionId } = req.query;

    const reaction = await getCustomRepository(ReactionRepository).findOneOrFail({
      where: [{ replyId, id: reactionId }],
    });
    await getCustomRepository(ReactionRepository).remove(reaction);

    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteReactionById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const reaction = await getCustomRepository(ReactionRepository).findOneOrFail(id);
    await getCustomRepository(ReactionRepository).remove(reaction);

    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}

export async function deleteReactionByInfo(req: Request, res: Response) {
  try {
    const { threadId, userHasWorkspaceId, emoji } = req.query;

    const reaction = await getCustomRepository(ReactionRepository).findOneOrFail({
      where: { threadId, userHasWorkspaceId, emoji },
    });
    await getCustomRepository(ReactionRepository).remove(reaction);

    return res.status(OK).end();
  } catch (e) {
    return res.status(BAD_REQUEST).json(e);
  }
}
