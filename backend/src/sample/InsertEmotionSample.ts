import { getConnection, getRepository } from 'typeorm';
import Emotion from '../model/Emotion';
import EmotionSampleValue from './value/EmotionSampleValue';

const insertEmotionSample = async () => {
  const EmotionCount = await getRepository(Emotion).count();
  if (EmotionCount > 0) return;
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Emotion)
    .values(EmotionSampleValue)
    .execute();
};

export default insertEmotionSample;
