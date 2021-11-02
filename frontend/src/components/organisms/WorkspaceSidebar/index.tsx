import SidebarDivision from '@molecules/SidebarDivision';
import SidebarChannelElement from '@molecules/SidebarChannelElement';
import React from 'react';
import { Container } from './style';
import SidebarAddElement from '@molecules/SidebarAddElement';
import { useRecoilState } from 'recoil';
import { channelCreateModalState } from 'src/state/modal';

const WorkspaceSidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(channelCreateModalState);

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
      <SidebarAddElement label="Add Channels" onClick={() => setIsOpen(true)} />
    </Container>
  );
};

export default WorkspaceSidebar;
