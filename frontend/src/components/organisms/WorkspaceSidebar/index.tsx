import SidebarDivision from '@molecules/SidebarDivision';
import SidebarChannelElement from '@molecules/SidebarChannelElement';
import React from 'react';
import { Container } from './style';
import SidebarAddElement from '@molecules/SidebarAddElement';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  channelCreateModalState,
  sidebarChannelInfoModalState,
} from 'src/state/modal';
import { NavLink } from 'react-router-dom';
import { channelListFromServerState } from 'src/state/Channel';

const WorkspaceSidebar = (): JSX.Element => {
  const [isChannelCreateModalOpen, setIsChannelCreateModalOpen] =
    useRecoilState(channelCreateModalState);
  const [isSidebarChannelInfoModalOpen, setIsSidebarChannelInfoModalOpen] =
    useRecoilState(sidebarChannelInfoModalState);
  const channelList = useRecoilValue(
    channelListFromServerState({
      userId: sessionStorage.getItem('id'),
      workspaceId: sessionStorage.getItem('workspaceId'),
    }),
  );

  return (
    <Container>
      <SidebarDivision label="Channels" options={true} type="Channels" />
      <NavLink
        to="/client/browse-channels"
        style={{ textDecoration: 'none', color: 'black' }}
        activeStyle={{ color: 'red' }}
      >
        <SidebarChannelElement
          label="browse-channels"
          isPrivate={false}
          onClick={() => {}}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </NavLink>

      {channelList.channels.map((channel) => {
        return (
          <NavLink
            to={`/client/${channel.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
            activeStyle={{ color: 'red' }}
          >
            <SidebarChannelElement
              label={channel.name}
              isPrivate={channel.type === 'private'}
              onClick={() => {}}
              onContextMenu={(e) => {
                e.preventDefault();
                setIsSidebarChannelInfoModalOpen(true);
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
