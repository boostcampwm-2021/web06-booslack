import { EntityRepository, Repository } from 'typeorm';
import { User } from '../model/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  findAllUsersWithChannelInfo(workspaceId: string) {
    return this.query(
      `select * from user_has_workspace a
          inner join channel_user_has_workspaces_user_has_workspace b
          on a.id = b.userHasWorkspaceId
          where workspaceId = ${workspaceId};`,
    );
  }
}
