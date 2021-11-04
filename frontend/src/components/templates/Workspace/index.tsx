import React from 'react';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import { RowDiv } from './styles';

interface Props {
  Content: JSX.Element;
}

const WorkspaceTemplate = ({ Content }: Props): JSX.Element => {
  return (
    <>
      <WorkspaceHeader />
      <RowDiv>
        <WorkspaceSidebar />
        {Content}
      </RowDiv>
    </>
  );
};

export default WorkspaceTemplate;