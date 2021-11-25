import { EntityRepository, Repository } from 'typeorm';
import Reply from '../model/Reply';

@EntityRepository(Reply)
export default class ReplyRepository extends Repository<Reply> {}
