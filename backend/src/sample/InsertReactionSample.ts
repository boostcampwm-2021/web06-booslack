import { getConnection, getRepository } from 'typeorm';
import Reaction from '../model/Reaction';
import ReactionSampleValue from './value/ReactionSampleValue';

const insertReactionSample = async () => {
  const ReactionCount = await getRepository(Reaction).count();
  if (ReactionCount > 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Reaction)
    .values(ReactionSampleValue)
    .execute();
};

export default insertReactionSample;
