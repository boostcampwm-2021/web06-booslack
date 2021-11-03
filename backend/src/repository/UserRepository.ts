import { EntityRepository, Repository } from 'typeorm';
import { User } from '../model/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {}
