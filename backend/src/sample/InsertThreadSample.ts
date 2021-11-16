import { getConnection, getRepository } from 'typeorm';
import { Thread } from '../model/Thread';
import ThreadSampleValue from './value/ThreadSampleValue';

const insertThreadSample = async () => {
  const ThreadCount = await getRepository(Thread).count();
  if (ThreadCount > 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Thread)
    .values(ThreadSampleValue)
    .execute();
};

export default insertThreadSample;
