import { getConnection } from 'typeorm';
import { Channel } from '../model/Channel';
import ChannelSampleValue from './value/ChannelSampleValue';

const insertChannelSample = async () => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Channel)
    .values(ChannelSampleValue)
    .execute();
};

export default insertChannelSample;
