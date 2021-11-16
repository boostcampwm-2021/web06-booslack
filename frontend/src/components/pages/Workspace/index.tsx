import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WorkspaceContent from '@organisms/WorkspaceContent';
import WorkspaceTemplate from '@templates/Workspace';
<<<<<<< HEAD
import { useRecoilState } from 'recoil';
import userState from '@state/user';
import BrowseContent from '@organisms/BrowseContent';
=======
>>>>>>> 362c55e (refactor: 3가지 수정 오류 사항 수정)

const Workspace = (): JSX.Element => {
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    setUser((prevState) => ({
      ...prevState,
      workspaceId,
      channelId,
    }));
  }, [workspaceId, channelId]);

  const workspaceContent =
    user.channelId === 'browse-channels' ? (
      <BrowseContent />
    ) : (
      <WorkspaceContent />
    );

  return (
    <>
      <WorkspaceTemplate Content={workspaceContent} />
    </>
  );
};

export default Workspace;
