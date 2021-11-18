import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WorkspaceContent from '@organisms/WorkspaceContent';
import WorkspaceTemplate from '@templates/Workspace';
import { useRecoilState } from 'recoil';
import userState from '@state/user';
import BrowseContent from '@organisms/BrowseContent';
import axios from 'axios';

const Workspace = (): JSX.Element => {
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const getUserHasWorkspace = async () => {
      const res = await axios.get(
        `/api/userHasWorkspaces?userId=${user.id}&workspaceId=${workspaceId}`,
      );
      const { id, nickname, description, theme } = res.data.userHasWorkspace;

      setUser((prevState) => ({
        ...prevState,
        userHasWorkspaceId: id,
        nickname,
        description,
        theme,
      }));
    };
    getUserHasWorkspace();
  }, [workspaceId]);

  const workspaceContent =
    channelId === 'browse-channels' ? <BrowseContent /> : <WorkspaceContent />;

  return (
    <>
      <WorkspaceTemplate Content={workspaceContent} />
    </>
  );
};

export default Workspace;
