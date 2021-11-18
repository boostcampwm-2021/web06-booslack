import { getConnection, getRepository } from 'typeorm';
import File from '../model/File';
import FileSampleValue from './value/FileSampleValue';

const insertFileSample = async () => {
  const FileCount = await getRepository(File).count();
  if (FileCount > 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(File)
    .values(FileSampleValue)
    .execute();
};

export default insertFileSample;
