import React from 'react';
import WorkspaceTemplate from '@templates/Workspace';
import WorkspaceContent from '@organisms/WorkspaceContent';
import CreateChannelModal from '@organisms/CreateChannelModal';

const Workspace = (): JSX.Element => {
  const ChatContent: JSX.Element = <WorkspaceContent />;
  const query = window.location.search.substring(1);
  if (query !== '') {
    const params = new URLSearchParams(query);
    sessionStorage.setItem('id', params.get('id'));
    sessionStorage.setItem('nickname', params.get('nickname'));
    sessionStorage.setItem('email', params.get('email'));
    sessionStorage.setItem('type', params.get('type'));
    window.location.replace('/workspace');
  }
  return (
    <>
      <WorkspaceTemplate Content={ChatContent} />
      <CreateChannelModal />
    </>
  );
};

export default Workspace;
