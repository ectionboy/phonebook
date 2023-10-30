import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
