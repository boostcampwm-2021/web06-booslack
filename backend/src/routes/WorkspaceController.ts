// import StatusCodes from 'http-status-codes';
// import { Request, Response } from 'express';
// import { WorkspaceService } from 'src/service/WorkspaceService';
// import paramMissingError from '@shared/constants';
//
// const { BAD_REQUEST, CREATED, OK } = StatusCodes;
//
// export async function getAllWorkspaces(req: Request, res: Response) {
//   const workspaces = await WorkspaceService.find();
//   return res.status(OK).json({ workspaces });
// }
//
// export async function addOneWorkspace(req: Request, res: Response) {
//   const { workspace } = req.body;
//   if (!workspace) {
//     return res.status(BAD_REQUEST).json({
//       error: paramMissingError,
//     });
//   }
//   await WorkspaceService.save(workspace);
//   return res.status(CREATED).end();
// }
//
// export async function updateOneWorkspace(req: Request, res: Response) {
//   const { workspace } = req.body;
//   if (!workspace) {
//     return res.status(BAD_REQUEST).json({
//       error: paramMissingError,
//     });
//   }
//   workspace.id = Number(workspace.id);
//   await WorkspaceService.update(workspace);
//   return res.status(OK).end();
// }
//
// export async function deleteOneWorkspace(req: Request, res: Response) {
//   const { id } = req.params;
//   await WorkspaceService.delete(Number(id));
//   return res.status(OK).end();
// }
