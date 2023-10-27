import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = async body => {
  const { data } = await axios.post('users/signup', body);
  setToken(data.token);
  return data;
};
export const signin = async body => {
  const { data } = await axios.post('users/login', body);
  setToken(data.token);
  return data;
};
export const logout = async () => {
  const { data } = await axios.post('users/logout');
  deleteToken();
  return data;
};

// {
//     "name": "ddd123",
//     "email": "qwe111111@qwe.qqq",
//     "password": "111111111"
// }
