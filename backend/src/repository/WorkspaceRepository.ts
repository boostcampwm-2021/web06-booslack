import { EntityRepository, Repository } from 'typeorm';
import { Workspace } from '../model/Workspace';

@EntityRepository(Workspace)
export default class WorkspaceRepository extends Repository<Workspace> {}
