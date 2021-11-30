import axios from 'axios';
import API from '@global/api';

export const getUserInfo = async () => {
  const res = await axios.get(API.get.login);
  return res.data;
};
