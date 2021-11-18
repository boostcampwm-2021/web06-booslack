import { getConnection, getRepository } from 'typeorm';
import Reply from '../model/Reply';
import ReplySampleValue from './value/ReplySampleValue';

const insertReplySample = async () => {
  const ReplyCount = await getRepository(Reply).count();
  if (ReplyCount > 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Reply)
    .values(ReplySampleValue)
    .execute();
};

export default insertReplySample;
