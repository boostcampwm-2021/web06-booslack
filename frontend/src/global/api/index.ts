const PREFIX = '/api';

const CHANNEL = 'channels';
const WORKSPACE = 'workspaces';

export const API = {
  get: {
    channel: {
      all: `${PREFIX}/${CHANNEL}/`,
    },
    workspace: {
      user: `${PREFIX}/${WORKSPACE}/user`,
    },
  },

  post: {
    workspace: {
      addOne: `${PREFIX}/${WORKSPACE}`,
      code: `${PREFIX}/${WORKSPACE}/code`,
    },
  },
} as const;

export default API;
