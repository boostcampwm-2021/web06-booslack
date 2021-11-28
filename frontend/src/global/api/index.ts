export const PREFIX = '/api';

const USER = 'users';
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

  update: {
    userHasWorkspace: `${PREFIX}/${userHasWorkSpace}`,
  },

  delete: {
    userHasWorkspace: {
      id: `${PREFIX}/${userHasWorkSpace}`,
    },
    user: {
      channel: `${PREFIX}/${USER}`,
    },
  },
} as const;

export default API;
