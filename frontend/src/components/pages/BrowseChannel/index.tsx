import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceTemplate from '@templates/Workspace';
import { browseCursor } from '@state/Channel';

const BrowseChannel = (): JSX.Element => {
<<<<<<< HEAD
  return (
    <WorkspaceTemplate>
      <BrowseContent />
    </WorkspaceTemplate>
  );
=======
  const Content: JSX.Element = <BrowseContent />;

  const resetCursor = useResetRecoilState(browseCursor);
  useEffect(() => {
    return () => {
      resetCursor();
    };
  }, []);

  return <WorkspaceTemplate Content={Content} />;
>>>>>>> 0b1db23 (fix: browserchannel과 client에 대한 오류 수정)
};

export default BrowseChannel;
