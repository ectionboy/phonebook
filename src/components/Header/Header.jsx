import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/slice';
import { authSelector } from 'redux/selectors';

const Header = () => {
  const isAuth = useSelector(authSelector);
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logOutThunk());
  };
  const handleButton = () => {
  exit()
  }

  return (
    <div>
      <Link to="/">Home</Link>
      {isAuth && <Link to="/contacts">Contacts</Link>}

      {isAuth && <button onClick={handleButton}>Logout</button>}
    </div>
  );
};

export default Header;
