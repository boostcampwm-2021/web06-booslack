import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavLink, useParams } from 'react-router-dom';
import SidebarDivision from '@molecules/SidebarDivision';
import SidebarChannelElement from '@molecules/SidebarChannelElement';
import SidebarAddElement from '@molecules/SidebarAddElement';
import {
  channelCreateModalState,
  sidebarChannelInfoModalState,
} from '@state/modal';
import userState from '@state/user';
import { useChannelListQuery } from '@hook/useChannels';
import { Container } from './style';

const WorkspaceSidebar = (): JSX.Element => {
  const user = useRecoilValue(userState);
  const { workspaceId }: { workspaceId: string } = useParams();

  const setIsChannelCreateModalOpen = useSetRecoilState(
    channelCreateModalState,
  );
  const setIsSidebarChannelInfoModalOpen = useSetRecoilState(
    sidebarChannelInfoModalState,
  );

  const { isLoading, isError, data } = useChannelListQuery(
    user.id,
    workspaceId,
  );

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <Container>
      <SidebarDivision label="Channels" options type="Channels" />
      <NavLink
        to={`/client/${workspaceId}/browse-channels`}
        style={{ textDecoration: 'none', color: 'black' }}
        activeStyle={{ color: 'red' }}
      >
        <SidebarChannelElement
          label="Channel browser"
          isPrivate={false}
          onClick={() => {}}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </NavLink>

      {data.map((channel) => {
        return (
          <NavLink
            key={channel.id}
            to={`/client/${workspaceId}/${channel.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
            activeStyle={{ color: 'red' }}
          >
            <SidebarChannelElement
              label={channel.name}
              isPrivate={channel.type === 'private'}
              onClick={() => {}}
              onContextMenu={(e) => {
                e.preventDefault();
                setIsSidebarChannelInfoModalOpen({
                  status: true,
                  channelId: channel.id,
                });
              }}
            />
          </NavLink>
        );
      })}
      <SidebarAddElement
        label="Add Channels"
        onClick={() => setIsChannelCreateModalOpen(true)}
      />
    </Container>
  );
};

export default WorkspaceSidebar;
