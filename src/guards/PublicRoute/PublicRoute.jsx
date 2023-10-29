import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from 'redux/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  const location = useLocation();

  //   return isAuth ? children : <Navigate to='/' state={location} />
  return !isAuth ? children : <Navigate to="/" state={location} />;
};

export default PublicRoute;
