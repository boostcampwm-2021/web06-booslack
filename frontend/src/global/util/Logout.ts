import axios from 'axios';

export const Logout = async () => {
  await axios({
    method: 'GET',
    url: 'api/login/logout',
  });
};
