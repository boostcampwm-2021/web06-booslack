import { getConnection, getRepository } from 'typeorm';
import { Workspace } from '../model/Workspace';
import WorkspaceSampleValue from './value/WorkspaceSampleValue';

const insertWorkspaceSample = async () => {
  const WorkspaceCount = await getRepository(Workspace).count();
  if (WorkspaceCount === 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Workspace)
    .values(WorkspaceSampleValue)
    .execute();
};

export default insertWorkspaceSample;
