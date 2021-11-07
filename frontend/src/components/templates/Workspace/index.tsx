import React, { Suspense } from 'react';
import { useRecoilState } from 'recoil';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import CreateChannelModal from '@organisms/CreateChannelModal';
import ChannelInfoModal from '@organisms/ChannelInfoModal';
import ChannelDescriptionModal from '@organisms/ChannelDescriptionModal';
import {
  channelCreateModalState,
  channelDescriptionModalState,
  channelInfoModalState,
} from 'src/state/modal';
import { RowDiv } from './styles';

interface Props {
  Content: JSX.Element;
}

const WorkspaceTemplate = ({ Content }: Props): JSX.Element => {
  const [channelModal] = useRecoilState(channelCreateModalState);
  const [infoModal] = useRecoilState(channelInfoModalState);
  const [descriptionModal] = useRecoilState(channelDescriptionModalState);

  return (
    <>
      <Suspense fallback={() => <p>Loading...</p>}>
        <WorkspaceHeader />
        <RowDiv>
          <WorkspaceSidebar />
          {Content}
        </RowDiv>
      </Suspense>
      {channelModal && <CreateChannelModal />}
      {infoModal && <ChannelInfoModal />}
      {descriptionModal && <ChannelDescriptionModal />}
    </>
  );
};

export default WorkspaceTemplate;
