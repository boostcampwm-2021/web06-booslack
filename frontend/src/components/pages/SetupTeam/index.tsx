import React from 'react';
import SetupTeamQuestions from '@organisms/SetupTeamQuestions';
import EmptyWorkspaceTemplate from '@templates/EmptyWorkspace';

const SetupTeam = (): JSX.Element => {
  return (
    <EmptyWorkspaceTemplate>
      <SetupTeamQuestions />
    </EmptyWorkspaceTemplate>
  );
};

export default SetupTeam;
