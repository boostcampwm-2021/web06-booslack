import { getConnection, getRepository } from 'typeorm';
import UserHasWorkspace from '../model/UserHasWorkspace';
import UserHasWorkspaceSampleValue from './value/UserHasWorkspaceSampleValue';

const insertUserHasWorkspaceSample = async () => {
  const UserHasWorkspaceCount = await getRepository(UserHasWorkspace).count();
  if (UserHasWorkspaceCount > 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(UserHasWorkspace)
    .values(UserHasWorkspaceSampleValue)
    .execute();
};

export default insertUserHasWorkspaceSample;
