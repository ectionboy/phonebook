import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/slice';
import { authSelector, nameSelector } from 'redux/selectors';

const Header = () => {
  const isAuth = useSelector(authSelector);
  const name = useSelector(nameSelector);

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
      {isAuth && <h3>Hi, {name ?? ''}</h3>}
      
    </div>
  );
};

export default Header;
