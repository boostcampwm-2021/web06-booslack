import SidebarDivision from '@molecules/SidebarDivision';
import SidebarChannelElement from '@molecules/SidebarChannelElement';
import React from 'react';
import { Container } from './style';
import SidebarAddElement from '@molecules/SidebarAddElement';

const WorkspaceSidebar = (): JSX.Element => {
  return (
    <Container>
      <SidebarDivision label="Channels" options={true} type="Channels" />
      <SidebarChannelElement
        label="random"
        isPrivate={false}
        onClick={() => {}}
      />
      <SidebarChannelElement
        label="private channel"
        isPrivate={true}
        onClick={() => {}}
      />
      <SidebarAddElement
        label="Add Channels"
        isPrivate={true}
        onClick={() => {}}
      />
    </Container>
  );
};

export default WorkspaceSidebar;
