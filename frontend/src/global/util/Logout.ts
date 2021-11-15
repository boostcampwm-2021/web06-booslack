import axios from 'axios';

const Logout = async (history) => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'api/login/logout',
    });
    if (response.data) history.push('/login');
  } catch (error) {
    history.push('/notfound');
  }
};

export default Logout;
