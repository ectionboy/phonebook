
import ContactsList from 'components/ContactsList/ContactsList';
import Form from 'components/Form/Form';
import React from 'react';
 
const Contacts = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <Form />
      <ContactsList />
    </div>
  );
};

export default Contacts;
