import Header from 'components/Header/Header';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { authSelector } from 'redux/selectors';

const Layout = () => {




  const isAuth = useSelector(authSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login', { replace: true });
    } 
  }, [isAuth, navigate]);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
