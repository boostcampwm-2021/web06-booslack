import { EntityRepository, Repository } from 'typeorm';
import { Thread } from '../model/Thread';

@EntityRepository(Thread)
export default class ThreadRepository extends Repository<Thread> {}
