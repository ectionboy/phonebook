import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/slice';
import { authSelector, nameSelector } from 'redux/selectors';

const Header = () => {
  const isAuth = useSelector(authSelector);
  const name = useSelector(nameSelector);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logOutThunk());
  };
  const handleButton = () => {
    exit();
  };
  const navToHomePage = () => {
    navigate('/');
  };
  const navToContactsPage = () => {
    navigate('/contacts');
  };

  return (
    // <div>
    //   <Link to="/">Home</Link>
    //   {isAuth && <Link to="/contacts">Contacts</Link>}

    //   {isAuth && <button onClick={handleButton}>Logout</button>}
    //   {isAuth && <h3>Hi, {name ?? ''}</h3>}

    // </div>
    <>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          padding: '8px 0',
        }}
      >
        <Box component="div">
          <Button sx={{}} onClick={navToHomePage} type="button" size="small">
            Home
          </Button>
          <Button
            sx={{}}
            onClick={navToContactsPage}
            type="button"
            size="small"
          >
            Contacts
          </Button>
        </Box>
        <Box
          component="div"
          sx={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}
        >
          <Typography variant="body2">Hi, {name ?? ''}</Typography>
          <Button
            sx={{ padding: '0px', textTransform: 'none' }}
            variant="outlined"
            onClick={handleButton}
            type="button"
            size="small"
          >
            Logout
          </Button>
        </Box>
      </Container>
      <Divider />
    </>
  );
};

export default Header;
