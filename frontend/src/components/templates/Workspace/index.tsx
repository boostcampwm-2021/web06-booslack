import React, { Suspense } from 'react';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import CreateChannelModal from '@organisms/CreateChannelModal';
import ChannelInfoModal from '@organisms/ChannelInfoModal';
import ChannelDescriptionModal from '@organisms/ChannelDescriptionModal';
import { RowDiv } from './styles';

interface Props {
  Content: JSX.Element;
}

const WorkspaceTemplate = ({ Content }: Props): JSX.Element => {
  return (
    <Suspense fallback={() => <p>Loading...</p>}>
      <WorkspaceHeader />
      <RowDiv>
        <WorkspaceSidebar />
        {Content}
      </RowDiv>
    </Suspense>
  );
};

export default WorkspaceTemplate;
