import React, { useEffect, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceTemplate from '@templates/Workspace';
import { browseCursor } from '@state/Channel';
import checkIsLogin from '@global/util/CheckIsLogin';
import { Redirect } from 'react-router-dom';

const BrowseChannel = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (!checkIsLogin()) {
    return <Redirect to="/notlogin" />;
  }

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
