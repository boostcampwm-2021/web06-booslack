export const PREFIX = '/api';

const USER = 'users';
const CHANNEL = 'channels';
const WORKSPACE = 'workspaces';
const USERHASWORKSPACE = 'userHasWorkspaces';
const THREADS = 'threads';
const REACTION = 'reactions';
const REPLY = 'replys';

const API = {
  get: {
    channel: {
      base: `${PREFIX}/${CHANNEL}`,
      userChannels: `${PREFIX}/${CHANNEL}/channelsThatUserIn`,
    },
    workspace: {
      base: `${PREFIX}/${WORKSPACE}`,
      user: `${PREFIX}/${WORKSPACE}/user`,
      getCode: `${PREFIX}/${WORKSPACE}/code`,
    },
    users: {
      workspaces: `${PREFIX}/${USER}/workspaces`,
    },
    threads: `${PREFIX}/${THREADS}`,
    userHasWorkspaces: `${PREFIX}/${USERHASWORKSPACE}`,
    login: `${PREFIX}/login/info`,
  },

  post: {
    workspace: {
      addOne: `${PREFIX}/${WORKSPACE}`,
      code: `${PREFIX}/${WORKSPACE}/code`,
    },
    channel: {
      addOne: `${PREFIX}/${CHANNEL}`,
      userToChannel: `${PREFIX}/${CHANNEL}/userToChannel`,
    },
    thread: `${PREFIX}/${THREADS}`,
    reaction: {
      postOne: `${PREFIX}/${REACTION}`,
      reply: `${PREFIX}/${REACTION}/reply`,
    },
    reply: `${PREFIX}/${REPLY}`,
  },

  update: {
    userHasWorkspace: `${PREFIX}/${USERHASWORKSPACE}`,
  },

  delete: {
    userHasWorkspace: {
      id: `${PREFIX}/${USERHASWORKSPACE}`,
    },
    user: {
      channel: `${PREFIX}/${USER}`,
    },
    thread: `${PREFIX}/${THREADS}`,
    reaction: {
      deleteOne: `${PREFIX}/${REACTION}`,
      reply: `${PREFIX}/${REACTION}/reply`,
    },
    reply: `${PREFIX}/${REPLY}`,
  },

  put: {
    channel: `${PREFIX}/${CHANNEL}`,
    thread: `${PREFIX}/${THREADS}`,
    reply: `${PREFIX}/${REPLY}`,
  },
} as const;

export default API;
