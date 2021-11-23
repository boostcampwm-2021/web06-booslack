import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceTemplate from '@templates/Workspace';
import { browseCursor } from '@state/Channel';

const BrowseChannel = (): JSX.Element => {
  return (
    <WorkspaceTemplate>
      <BrowseContent />
    </WorkspaceTemplate>
  );
};

export default BrowseChannel;
