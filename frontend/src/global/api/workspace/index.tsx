import axios from 'axios';
import { API } from '../index';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const deleteUserFromWorkspace = async (workspaceId: number | string) => {
  return axios.delete(`${API.delete.userHasWorkspace.id}/${workspaceId}`);
};
