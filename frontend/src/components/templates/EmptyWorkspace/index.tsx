import React from 'react';
import WorkspaceHeaderContainer from '@organisms/WorkspaceHeader/style';
import WorkspaceSidebarContainer from '@organisms/WorkspaceSidebar/style';

import { RowDiv } from './styles';

interface Props {
  children: JSX.Element;
}

const EmptyWorkspaceTemplate = ({ children }: Props): JSX.Element => {
  return (
    <>
      <WorkspaceHeaderContainer />
      <RowDiv>
        <WorkspaceSidebarContainer />
        {children}
      </RowDiv>
    </>
  );
};

export default EmptyWorkspaceTemplate;
