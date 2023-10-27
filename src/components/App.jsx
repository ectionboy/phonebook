import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
import Contacts from './Contacts/Contacts';
import Register from './Register/Register';
import Login from './Login/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
