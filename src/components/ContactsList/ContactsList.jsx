import {
  Alert,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/selectors';
const ContactsList = () => {
  const [filtered, setFiltered] = useState([]);
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    if (filter && items) {
      setFiltered(
        items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
      );
    } else {
      setFiltered(items);
    }
  }, [filter, items]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '370px',
      }}
    >
      {/* {isLoading && <p>Loading contacts...</p>}
      {error && <b>{error}</b>} */}
      {/* <ContactsListUl>
        {filtered &&
          filtered.map(contact => (
            <ContactsItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ContactsButton 
              onClick={() => deleteItem(contact.id)}
              >Delete</ContactsButton>
            </ContactsItem>
          ))}
      </ContactsListUl> */}
            {isLoading && <Typography variant="overline" display="block"  gutterBottom>Loading contacts...</Typography>}
      {error &&  <Alert  sx={{marginTop: '8px'}} severity="warning">{error}</Alert>
}
      <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
        {filtered &&
          filtered.map(contact => (
            <ListItem
              sx={{
                padding: '4px 16px',
                marginBottom: '1px',
                bgcolor: '#e3f2fd',
              }}
              key={contact.id}
            >
              <ListItemText
                primary={contact.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline', marginLeft: '8px' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {contact.number}
                    </Typography>
                  </React.Fragment>
                }
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteItem(contact.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default ContactsList;
