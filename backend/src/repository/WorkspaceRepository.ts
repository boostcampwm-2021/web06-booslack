import { Workspace } from '@daos/Workspace';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Workspace)
export default class WorkspaceRepository extends Repository<Workspace> {}
