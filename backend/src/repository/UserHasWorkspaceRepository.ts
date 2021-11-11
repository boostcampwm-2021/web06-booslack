import { EntityRepository, Repository } from 'typeorm';
import { UserHasWorkspace } from '../model/UserHasWorkspace';

@EntityRepository(UserHasWorkspace)
export default class UserHasWorkspaceRepository extends Repository<UserHasWorkspace> {}
