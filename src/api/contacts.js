import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const refreshContacts = () => {
  const token = JSON.parse(localStorage?.getItem('persist:auth'));
  setToken(JSON.parse(token?.token));
};
export const getContacts = async () => {
  refreshContacts();
  const { data } = await axios('/contacts');
  return data;
};
export const addNewContact = async newContact => {
  refreshContacts();
  const { data } = await axios.post('contacts', newContact);
  return data;
};
export const delContact = async contactId => {
  refreshContacts();
  const { data } = await axios.delete(`contacts/${contactId}`);
  return data;
};
