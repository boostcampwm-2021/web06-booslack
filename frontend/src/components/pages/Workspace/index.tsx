import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import BrowseContent from '@organisms/BrowseContent';
import WorkspaceContent from '@organisms/WorkspaceContent';
import WorkspaceTemplate from '@templates/Workspace';
import checkIsLogin from '@global/util/CheckIsLogin';

const Workspace = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (!checkIsLogin()) {
    return <Redirect to="/notlogin" />;
  }

  const { channelId }: { channelId?: string } = useParams();

  // eslint-disable-next-line operator-linebreak
  const workspaceContent =
    channelId === 'browse-channels' ? <BrowseContent /> : <WorkspaceContent />;
  return (
    <>
      <WorkspaceTemplate Content={workspaceContent} />
    </>
  );
};

export default Workspace;
