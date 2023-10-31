import Contacts from 'components/Contacts/Contacts';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from 'redux/selectors';

const PrivateRoute = () => {
  const isAuth = useSelector(isLoggedIn);
  return isAuth ? <Contacts /> : <Navigate to="/login" />;
};

export default PrivateRoute;
