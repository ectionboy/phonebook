import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'redux/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);

  //   return isAuth ? children : <Navigate to='/' state={location} />
  return !isAuth ? children : <Navigate to="/" />;
};

export default PublicRoute;
