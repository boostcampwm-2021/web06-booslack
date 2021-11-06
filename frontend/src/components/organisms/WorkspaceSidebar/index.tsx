import SidebarDivision from '@molecules/SidebarDivision';
import SidebarChannelElement from '@molecules/SidebarChannelElement';
import React from 'react';
import { Container } from './style';
import SidebarAddElement from '@molecules/SidebarAddElement';
import { useRecoilState } from 'recoil';
import {
  channelCreateModalState,
  sidebarChannelInfoModalState,
} from 'src/state/modal';
import { BrowserRouter, NavLink } from 'react-router-dom';

const WorkspaceSidebar = (): JSX.Element => {
  const [isChannelCreateModalOpen, setIsChannelCreateModalOpen] =
    useRecoilState(channelCreateModalState);
  const [isSidebarChannelInfoModalOpen, setIsSidebarChannelInfoModalOpen] =
    useRecoilState(sidebarChannelInfoModalState);

  return (
    <Container>
      <SidebarDivision label="Channels" options={true} type="Channels" />
      <NavLink
        to="/client/random"
        style={{ textDecoration: 'none', color: 'black' }}
        activeStyle={{ color: 'red' }}
      >
        <SidebarChannelElement
          label="random"
          isPrivate={false}
          onClick={() => {}}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsSidebarChannelInfoModalOpen(true);
          }}
        />
      </NavLink>
      <NavLink
        to={(location) => ({
          ...location,
          pathname: '/client/private-channel',
        })}
        style={{ textDecoration: 'none', color: 'black' }}
        activeStyle={{ color: 'red' }}
      >
        <SidebarChannelElement
          label="private channel"
          isPrivate={true}
          onClick={() => {}}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsSidebarChannelInfoModalOpen(true);
          }}
        />
      </NavLink>
      <SidebarAddElement
        label="Add Channels"
        onClick={() => setIsChannelCreateModalOpen(true)}
      />
    </Container>
  );
};

export default WorkspaceSidebar;
