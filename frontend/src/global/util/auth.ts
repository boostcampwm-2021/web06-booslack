import axios from 'axios';

export const logout = async (): Promise<void> => {
  try {
    const response = await axios({
      method: 'GET',
      url: '/api/login/logout',
    });
    if (response.data) window.location.href = '/login';
  } catch (error) {
    throw new Error('logout error');
  }
};

export const checkUser = async (
  username: string,
  password: string,
): Promise<void> => {
  try {
    const response = await axios({
      method: 'GET',
      url: '/api/users/find',
      params: {
        username,
        password,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('check user error');
  }
};

export default logout;
