import React, { useEffect, useState } from 'react';
import SetupTeamQuestions from '@organisms/SetupTeamQuestions';
import EmptyWorkspaceTemplate from '@templates/EmptyWorkspace';
import checkIsLogin from '@global/util/CheckIsLogin';
import { Redirect } from 'react-router-dom';

const SetupTeam = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (!checkIsLogin()) {
    return <Redirect to="/notlogin" />;
  }

  return (
    <EmptyWorkspaceTemplate>
      <SetupTeamQuestions />
    </EmptyWorkspaceTemplate>
  );
};

export default SetupTeam;
