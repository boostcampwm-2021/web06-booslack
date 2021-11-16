import { getConnection, getRepository } from 'typeorm';
import { User } from '../model/User';
import UserSampleValue from './value/UserSampleValue';

const insertUserSample = async () => {
  const UserCount = await getRepository(User).count();
  if (UserCount === 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values(UserSampleValue)
    .execute();
};

export default insertUserSample;
