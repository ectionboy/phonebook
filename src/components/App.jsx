import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
import Contacts from './Contacts/Contacts';
import Register from './Register/Register';
import Login from './Login/Login';
import { useEffect } from 'react';
import { refreshAuth } from 'api/auth';
import { refreshContacts } from 'api/contacts';
import Home from './Home/Home';

export const App = () => {
  useEffect(() => {
		refreshAuth()
    refreshContacts()
	}, [])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
