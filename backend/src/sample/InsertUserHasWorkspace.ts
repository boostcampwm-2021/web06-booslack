import { getConnection } from 'typeorm';
import { UserHasWorkspace } from '../model/UserHasWorkspace';
import UserHasWorkspaceSampleValue from './value/UserHasWorkspaceSampleValue';

const insertUserHasWorkspaceSample = async () => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(UserHasWorkspace)
    .values(UserHasWorkspaceSampleValue)
    .execute();
};

export default insertUserHasWorkspaceSample;
