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
} from '@state/modal';
import { RowDiv } from './styles';

interface Props {
  Content: JSX.Element;
}

const WorkspaceTemplate = ({ Content }: Props): JSX.Element => {
  const [channelModal] = useRecoilState(channelCreateModalState);
  const [infoModal] = useRecoilState(channelInfoModalState);
  const [descriptionModal] = useRecoilState(channelDescriptionModalState);

  return (
<<<<<<< HEAD
    <>
      <Suspense fallback={<p>Loading...</p>}>
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
=======
    <Suspense fallback={() => <p>Loading...</p>}>
      <WorkspaceHeader />
      <RowDiv>
        <WorkspaceSidebar />
        {Content}
      </RowDiv>
    </Suspense>
>>>>>>> 036d3fb (fix: pr #73 #74 합친후 에러 수정)
  );
};

export default WorkspaceTemplate;
