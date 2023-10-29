import { Box, Button, Container, Divider } from '@mui/material';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelector } from 'redux/selectors';

const Header = () => {
  const isAuth = useSelector(authSelector);

  const navigate = useNavigate();

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
        {isAuth ? <UserMenu /> : <AuthMenu />}
      </Container>
      <Divider />
    </>
  );
};

export default Header;
