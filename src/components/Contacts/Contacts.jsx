import { Container, Typography } from '@mui/material';
import ContactsList from 'components/ContactsList/ContactsList';
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
      <ContactsList />
    </Container>
  );
};

export default Contacts;
