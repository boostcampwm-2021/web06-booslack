import { EntityRepository, Repository } from 'typeorm';
import Reaction from '../model/Reaction';

@EntityRepository(Reaction)
export default class ReactionRepository extends Repository<Reaction> {}
