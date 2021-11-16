import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import SetupTeamQuestions from '@organisms/SetupTeamQuestions';
import CodeModal from '@organisms/CodeModal';
import EmptyWorkspaceTemplate from '@templates/EmptyWorkspace';
import { codeModalState } from '@state/modal';

const SetupTeam = (): JSX.Element => {
  const resetModalState = useResetRecoilState(codeModalState);

  useEffect(() => {
    return () => {
      resetModalState();
    };
  });

  return (
    <>
      <EmptyWorkspaceTemplate>
        <SetupTeamQuestions />
      </EmptyWorkspaceTemplate>
      <CodeModal Content="잘못된 요청입니다. 조금 있다 실행해 주세요." />
    </>
  );
};

export default SetupTeam;
