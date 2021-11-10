import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceTemplate from '@templates/Workspace';
import { browseCursor } from '@state/Channel';

const BrowseChannel = (): JSX.Element => {
  const Content: JSX.Element = <BrowseContent />;

  const resetCursor = useResetRecoilState(browseCursor);

  useEffect(() => {
    return () => {
      resetCursor();
    };
  }, []);

  return <WorkspaceTemplate Content={Content} />;
};

export default BrowseChannel;
