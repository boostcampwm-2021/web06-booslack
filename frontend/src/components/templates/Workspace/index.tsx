import React, { Suspense } from 'react';
import WorkspaceHeader from '@organisms/WorkspaceHeader';
import WorkspaceSidebar from '@organisms/WorkspaceSidebar';
import { RowDiv } from './styles';

interface Props {
  Content: JSX.Element;
}

const WorkspaceTemplate = ({ Content }: Props): JSX.Element => {
  return (
    <Suspense fallback={() => <p>Loading...</p>}>
      <WorkspaceHeader />
      <RowDiv>
        <WorkspaceSidebar />
        {Content}
      </RowDiv>
    </Suspense>
  );
};

export default WorkspaceTemplate;
