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
import { BrowserRouter, Link } from 'react-router-dom';

const WorkspaceSidebar = (): JSX.Element => {
  const [isChannelCreateModalOpen, setIsChannelCreateModalOpen] =
    useRecoilState(channelCreateModalState);
  const [isSidebarChannelInfoModalOpen, setIsSidebarChannelInfoModalOpen] =
    useRecoilState(sidebarChannelInfoModalState);

  return (
    <BrowserRouter>
      <Container>
        <SidebarDivision label="Channels" options={true} type="Channels" />
        <Link
          to={`${window.location.pathname}/random`}
          style={{ textDecoration: 'none', color: 'black' }}
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
        </Link>
        <Link
          to={`${window.location.pathname}/privateChannel`}
          style={{ textDecoration: 'none', color: 'black' }}
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
        </Link>
        <SidebarAddElement
          label="Add Channels"
          onClick={() => setIsChannelCreateModalOpen(true)}
        />
      </Container>
    </BrowserRouter>
  );
};

export default WorkspaceSidebar;
