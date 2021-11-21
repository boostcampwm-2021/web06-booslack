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
    const likeQuery = (): string => (like ? `name like '%${like}%' and` : '');

    // FULL OUTER JOIN booslack.user_has_workspace_channel as user_has_workspace

    const rawQuery = this.query(`
    with tmp as (
      select 
      channel.id,
      channel.name,
      channel.description,
      channel.private,
      joinTable.userId,
      joinTable.channelId
      from booslack.channel channel
      RIGHT JOIN (
        select channelId, user_has_workspace.userId 
        from booslack.user_has_workspace_channel user_has_workspace_channel
        INNER JOIN booslack.user_has_workspace as user_has_workspace
        ON user_has_workspace_channel.userHasWorkspaceId = user_has_workspace.id
        AND user_has_workspace.workspaceId = ${workspaceId}
        ) as joinTable
      ON booslack.channel.id = joinTable.channelId
    )
    SELECT *, COUNT(name) OVER() AS full_count
    from tmp
    where ${likeQuery()} ((tmp.private = 0)
    OR (tmp.userId = ${userId} AND tmp.private = 1))
    GROUP BY name
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
