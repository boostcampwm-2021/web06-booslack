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
    const rawQuery = this.query(`
    select *, count(*) OVER() AS full_count from booslack.channel
    where ${likeQuery()} booslack.channel.id in (
      select channelId from booslack.user_has_workspace_channel
      where booslack.user_has_workspace_channel.userHasWorkspaceId =ANY (
        select id 
          from booslack.user_has_workspace
        where (booslack.user_has_workspace.userId = ${userId}
        and booslack.user_has_workspace.workspaceId = ${workspaceId}
        and booslack.channel.private = 1
        ) or 
        (
          booslack.user_has_workspace.workspaceId = ${workspaceId}
          and booslack.channel.private = 0
        )
      )    
      )
    ORDER BY name ${sortOption === 'rAlpha' ? 'DESC' : ''}
    LIMIT ${LIMIT}
    OFFSET ${OFFSET};
  `);

    return rawQuery;
  }

  /*
    return this.findAndCount({
      skip: OFFSET,
      take: LIMIT,
      relations: ['workspace'],
      order: getOrderOption(sortOption),
      where: [{ ...likeQuery, workspaceId, private: }],
    });
    */

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
