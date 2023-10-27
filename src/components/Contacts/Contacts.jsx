// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
// } from '@mui/material';
import ContactsList from 'components/ContactsList/ContactsList';
import Form from 'components/Form/Form';
import React from 'react';
 
const Contacts = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <Form />
      <ContactsList />
      {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="...Name..."
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  ...Number...
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List> */}
    </div>
  );
};

export default Contacts;
