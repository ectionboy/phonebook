import { Box, Container, Typography } from '@mui/material';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import React from 'react';

const Contacts = () => {
  return (
    // <div>
    //   <h1>Contacts</h1>
    //   <Form />
    //   <ContactsList />
    // </div>
    <Container
      sx={{
        padding: '14px 24px',
        margin: '0',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contacts
      </Typography>
      <Form />
      <Box>
        <Filter />
        <ContactsList />
      </Box>
    </Container>
  );
};

export default Contacts;
