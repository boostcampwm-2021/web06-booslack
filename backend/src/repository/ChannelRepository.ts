import { EntityRepository, Repository } from 'typeorm';
import { pageLimitCount } from '@enum';
import { Channel } from '../model/Channel';

export type SortOption = 'alpha' | 'rAlpha';

interface OrderOption {
  workspace?: 'ASC' | 'DESC' | 1 | -1 | undefined;
  id?: 'ASC' | 'DESC' | 1 | -1 | undefined;
  name?: 'ASC' | 'DESC' | 1 | -1 | undefined;
  type?: 'ASC' | 'DESC' | 1 | -1 | undefined;
  description?: 'ASC' | 'DESC' | 1 | -1 | undefined;
  users?: 'ASC' | 'DESC' | 1 | -1 | undefined;
}

const getOrderOption = (sortOption: SortOption): OrderOption => {
  if (sortOption === 'rAlpha') {
    return {
      name: 'DESC',
      id: 'ASC',
    };
  }

  return {
    name: 'ASC',
    id: 'ASC',
  };
};

@EntityRepository(Channel)
export default class ChannelRepository extends Repository<Channel> {
  findByOffset(
    userID: number,
    OFFSET: number,
    sortOption: SortOption,
    LIMIT: number = pageLimitCount,
  ): Promise<Channel[]> {
    return this.find({
      skip: OFFSET,
      take: OFFSET + LIMIT,
      relations: ['workspace'],
      order: getOrderOption(sortOption),
      where: [{ type: 'public' }, { type: 'private', id: userID }],
    });
  }

  getCount(relation: string): Promise<number> {
    return this.createQueryBuilder('count').getCount();
  }
}
