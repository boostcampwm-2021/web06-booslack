import { EntityRepository, Repository } from 'typeorm';
import { RowDataPacket } from 'mysql2';
import UserHasWorkspace from '../model/UserHasWorkspace';

@EntityRepository(UserHasWorkspace)
export default class UserHasWorkspaceRepository extends Repository<UserHasWorkspace> {
  findAndEachCount(userId: number): Promise<undefined | RowDataPacket[]> {
    const subquery = this.createQueryBuilder('usercount')
      .select('usercount.workspaceId', 'id')
      .addSelect('COUNT(*)', 'count')
      .groupBy('usercount.workspaceId');

    const workspaces = this.createQueryBuilder('user')
      .leftJoinAndSelect('user.workspace', 'workspace')
      .select('workspace.name', 'name')
      .addSelect('user.workspaceId', 'id')
      // eslint-disable-next-line max-len
      .leftJoinAndSelect(`( ${subquery.getQuery()} )`, 'jointable', 'user.workspaceId = jointable.id')
      .where('user.userId = :userId', { userId })
      .getRawMany();

    return workspaces;
  }
}
