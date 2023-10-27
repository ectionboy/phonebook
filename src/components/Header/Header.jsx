import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/slice';
import { authSelector } from 'redux/selectors';

const Header = () => {
  const isAuth = useSelector(authSelector);
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logOut());
  };
  const handleButton = () => {
  exit()
  }

  return (
    <div>
      Header
      {isAuth && <button onClick={handleButton}>Logout</button>}
    </div>
  );
};

export default Header;
