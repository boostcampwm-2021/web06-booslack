import axios from 'axios';
import API from '@global/api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const deleteUserFromWorkspace = async (workspaceId: number | string) => {
  return axios.delete(`${API.delete.userHasWorkspace.id}/${workspaceId}`);
};

export const getUserHasWorkspace = async (
  userId: string,
  workspaceId: string,
) => {
  const res = await axios.get(
    `${API.get.userHasWorkspaces}?userId=${userId}&workspaceId=${workspaceId}`,
  );

  return res.data.userHasWorkspace;
};
