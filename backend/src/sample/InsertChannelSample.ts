import { getConnection, getRepository } from 'typeorm';
import { Channel } from '../model/Channel';
import ChannelSampleValue from './value/ChannelSampleValue';

const insertChannelSample = async () => {
  const ChannelCount = await getRepository(Channel).count();
  if (ChannelCount > 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Channel)
    .values(ChannelSampleValue)
    .execute();
};

export default insertChannelSample;
