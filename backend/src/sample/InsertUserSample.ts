import { getConnection } from 'typeorm';
import { User } from '../model/User';
import UserSampleValue from './value/UserSampleValue';

const insertUserSample = async () => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values(UserSampleValue)
    .execute();
};

export default insertUserSample;
