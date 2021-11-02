import { Channel } from '@daos/Channel';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Channel)
export default class ChannelRepository extends Repository<Channel> {}
