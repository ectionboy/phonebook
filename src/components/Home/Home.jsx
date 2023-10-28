import { Container, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    // <div>

    //   {/* <h1>Welcome to your phonebook.</h1> */}
    // </div>
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        padding: '24px 0',
      }}
    >
      <Typography variant="h4">Welcome to your phonebook</Typography>
    </Container>
  );
};

export default Home;
