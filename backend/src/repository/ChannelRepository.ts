/* eslint-disable arrow-body-style */
import { EntityRepository, Repository } from 'typeorm';
import { PAGE_LIMIT_COUNT } from '@enum';
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
    showPrivate: boolean,
    showPublic: boolean,
    showMine: boolean,
    LIMIT: number = PAGE_LIMIT_COUNT,
  ) {
    if (!showPrivate && !showPublic) return null;

    const likeQuery = (): string => (like ? `where name like '%${like}%'` : '');

    const privateQuery = (): string => {
      return showPrivate && showMine
        ? `
      select *
        from booslack.channel channel
      where private= 1 and channel.id = ANY (
        select channelId
          from booslack.user_has_workspace_channel
        where booslack.user_has_workspace_channel.userHasWorkspaceId = (
        select id 
          from booslack.user_has_workspace
        where booslack.user_has_workspace.userId = ${userId}
        and booslack.user_has_workspace.workspaceId = ${workspaceId}))`
        : '';
    };

    const publicQuery = (): string => {
      return showPublic && showMine
        ? `
      select *
        from booslack.channel channel
          where workspaceId = ${workspaceId} and private = 0`
        : '';
    };

    const notMineQuery = (): string => {
      return showMine
        ? ''
        : `
        
      `;
    };

    const unionQuery = showPublic && showPrivate && showMine ? 'UNION ALL' : '';

    const rawQuery = this.query(`
    
    select tmp.name, tmp.id, tmp.description, tmp.private, COUNT(name) OVER() AS full_count
    from (
    ${privateQuery()} 
    ${unionQuery}
    ${publicQuery()}
    ${notMineQuery()}
        ) tmp
      ${likeQuery()}
      GROUP BY tmp.name, tmp.id, tmp.description, tmp.private
      ORDER BY name ${sortOption === 'rAlpha' ? 'DESC' : ''}
      LIMIT ${LIMIT}
      OFFSET ${OFFSET * PAGE_LIMIT_COUNT};
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
