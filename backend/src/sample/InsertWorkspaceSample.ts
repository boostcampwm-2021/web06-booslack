import { getConnection } from 'typeorm';
import { Workspace } from '../model/Workspace';
import WorkspaceSampleValue from './value/WorkspaceSampleValue';

const insertWorkspaceSample = async () => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Workspace)
    .values(WorkspaceSampleValue)
    .execute();
};

export default insertWorkspaceSample;
