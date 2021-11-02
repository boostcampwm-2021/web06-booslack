import React, { useMemo } from 'react';
import ChannelContent from '@templates/Workspace/ChannelContent';
import WorkspaceContent from '@organisms/WorkspaceContent';

const Workspace = (): JSX.Element => {
  const ChatContent: JSX.Element = <WorkspaceContent />;

  return (
    <>
      <ChannelContent Content={ChatContent}></ChannelContent>
    </>
  );
};

export default Workspace;
