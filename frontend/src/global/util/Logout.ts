import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Logout = async () => {
  try {
    await axios({
      method: 'GET',
      url: 'api/login/logout',
    });
  } catch (e) {
    (() => useHistory().goBack())();
  }
};
