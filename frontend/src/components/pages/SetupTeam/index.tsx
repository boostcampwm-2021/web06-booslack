import React from 'react';
import SetupTeamQuestions from '@organisms/SetupTeamQuestions';
import EmptyWorkspaceTemplate from '@templates/EmptyWorkspace';

interface Props {
  history: any;
}

const SetupTeam = ({ history }: Props): JSX.Element => {
  return (
    <EmptyWorkspaceTemplate>
      <SetupTeamQuestions history={history}/>
    </EmptyWorkspaceTemplate>
  );
};

export default SetupTeam;
