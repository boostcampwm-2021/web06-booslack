import { EntityRepository, Repository } from 'typeorm';
import { Channel } from '../model/Channel';

@EntityRepository(Channel)
export default class ChannelRepository extends Repository<Channel> {}
