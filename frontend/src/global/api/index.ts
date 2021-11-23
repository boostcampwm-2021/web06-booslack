const PREFIX = '/api';

const CHANNEL = 'channels';
const WORKSPACE = 'workspaces';
const userHasWorkSpace = 'userHasWorkspaces';

export const API = {
  get: {
    channel: {
      all: `${PREFIX}/${CHANNEL}/`,
    },
    workspace: {
      user: `${PREFIX}/${WORKSPACE}/user`,
      getCode: `${PREFIX}/${WORKSPACE}/code`,
    },
  },

  post: {
    workspace: {
      addOne: `${PREFIX}/${WORKSPACE}`,
      code: `${PREFIX}/${WORKSPACE}/code`,
    },
  },

  delete: {
    userHasWorkspace: {
      id: `${PREFIX}/${userHasWorkSpace}`,
    },
  },
} as const;

export default API;
