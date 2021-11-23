import { EntityRepository, Repository } from 'typeorm';
import { pageLimitCount } from '@enum';
import Channel from '../model/Channel';

export type SortOption = 'alpha' | 'rAlpha';

@EntityRepository(Channel)
export default class ChannelRepository extends Repository<Channel> {
  findByOffset(
    userId: string,
    workspaceId: string,
    OFFSET: number,
    sortOption: SortOption,
    like: string,
    LIMIT: number = pageLimitCount,
  ) {
    const likeQuery = (): string => (like ? `where name like '%${like}%'` : '');

    // FULL OUTER JOIN booslack.user_has_workspace_channel as user_has_workspace

    const rawQuery = this.query(`
    
    select tmp.name, tmp.id, tmp.description, tmp.private, COUNT(name) OVER() AS full_count
    from (select *
      from booslack.channel channel
    where workspaceId = ${workspaceId} and private = 0
    UNION ALL
    select *
      from booslack.channel channel
    where private= 1 and channel.id = ANY (
      select channelId
        from booslack.user_has_workspace_channel
      where booslack.user_has_workspace_channel.userHasWorkspaceId = (
        select id from booslack.user_has_workspace
        where booslack.user_has_workspace.userId = ${userId}
        and booslack.user_has_workspace.workspaceId = ${workspaceId}))
        ) tmp
      ${likeQuery()}
      GROUP BY tmp.name, tmp.id, tmp.description, tmp.private
      ORDER BY name ${sortOption === 'rAlpha' ? 'DESC' : ''}
      LIMIT ${LIMIT}
      OFFSET ${OFFSET * pageLimitCount};
    `);

    return rawQuery;
  }

  findChannelsThatUserIn(userId: string, workspaceId: string) {
    return this.query(
      `
      select * from booslack.channel
      where booslack.channel.id in (
        select channelId from booslack.user_has_workspace_channel
        where booslack.user_has_workspace_channel.userHasWorkspaceId = (
          select id from booslack.user_has_workspace
          where booslack.user_has_workspace.userId = ${userId}
          and booslack.user_has_workspace.workspaceId = ${workspaceId}));
    `,
    );
  }
}
