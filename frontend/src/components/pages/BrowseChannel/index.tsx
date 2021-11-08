import BrowseContent from '@organisms/BrowseContent';
import { browseCursor } from '@state/Channel';
import WorkspaceTemplate from '@templates/Workspace';
import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';

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
