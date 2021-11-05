import { EntityRepository, Repository } from 'typeorm';
import { pageLimitCount } from '@enum';
import { Channel } from '../model/Channel';

@EntityRepository(Channel)
export default class ChannelRepository extends Repository<Channel> {
  findByOffset(
    OFFSET: number,
    LIMIT: number = pageLimitCount,
  ): Promise<Channel[]> {
    return this.find({
      skip: OFFSET,
      take: OFFSET + LIMIT,
      relations: ['workspace'],
    });
  }

  getCount(relation: string): Promise<number> {
    return this.createQueryBuilder('count').getCount();
  }
}
