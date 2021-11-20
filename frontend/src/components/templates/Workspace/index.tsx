import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import CreateChannelModal from '@organisms/CreateChannelModal';
import ChannelInfoModal from '@organisms/ChannelInfoModal';
import ChannelDescriptionModal from '@organisms/ChannelDescriptionModal';
import SidebarChannelInfoModal from '@organisms/SidebarChannelInfoModal';
import {
  channelCreateModalState,
  channelDescriptionModalState,
  channelInfoModalState,
  sidebarChannelInfoModalState,
} from '@state/modal';
import { RowDiv } from './styles';

interface Props {
  Content: JSX.Element;
}

const WorkspaceTemplate = ({ Content }: Props): JSX.Element => {
  const channelCreateModal = useRecoilValue(channelCreateModalState);
  const channelInfoModal = useRecoilValue(channelInfoModalState);
  const channelDescriptionModal = useRecoilValue(channelDescriptionModalState);
  const sidebarChannelModal = useRecoilValue(sidebarChannelInfoModalState);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <WorkspaceHeader />
        <RowDiv>
          <WorkspaceSidebar />
          {Content}
        </RowDiv>
      </Suspense>
      {channelCreateModal && <CreateChannelModal />}
      {channelInfoModal && <ChannelInfoModal />}
      {channelDescriptionModal && <ChannelDescriptionModal />}
      {sidebarChannelModal && <SidebarChannelInfoModal />}
    </>
  );
};

export default WorkspaceTemplate;
