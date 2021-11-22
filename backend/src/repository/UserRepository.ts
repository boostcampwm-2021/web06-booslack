import { EntityRepository, Repository } from 'typeorm';
import User from '../model/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  findAllUsersWithChannelInfo(workspaceId: string, channelId: string) {
    return this.query(
      `select booslack.user_has_workspace.id, booslack.user_has_workspace.nickname, booslack.user_has_workspace.description, booslack.user_has_workspace.theme, 
        booslack.user_has_workspace.workspaceId, booslack.user_has_workspace.userId, booslack.user_has_workspace.createdAt, true as inChannel
      from booslack.user_has_workspace
        where userId in (
          select a.userId from booslack.user_has_workspace a
          left join booslack.user_has_workspace_channel b
          on a.id = b.userHasWorkspaceId
          where a.workspaceId = ${workspaceId}
          and b.channelId = ${channelId}
        )
        and workspaceId = ${workspaceId}
      union all
      select booslack.user_has_workspace.id, booslack.user_has_workspace.nickname, booslack.user_has_workspace.description, booslack.user_has_workspace.theme, 
        booslack.user_has_workspace.workspaceId, booslack.user_has_workspace.userId, booslack.user_has_workspace.createdAt, false as inChannel
      from booslack.user_has_workspace
        where userId not in (
          select a.userId from booslack.user_has_workspace a
          left join booslack.user_has_workspace_channel b
          on a.id = b.userHasWorkspaceId
          where a.workspaceId = ${workspaceId}
          and b.channelId = ${channelId}
        )
      and workspaceId = ${workspaceId}`,
    );
  }
}
