import React, { useState } from 'react'
import {Grid, Container } from 'semantic-ui-react';
import {ContactList} from './ContactList.jsx';
import { contactData } from '../../app/api/contactData.js';


export default function ContactsPage() {
//getting events from event object thats in store
//get events directly from store
const [ contacts, setContacts] = useState(contactData);
function addContact(name, phone, email) {
    setContacts([
        ...contacts,
        {
            name: name,
            phone: phone,
            email: email
        }
    ]);
}

  return (
    <Container className='main'>
    <Grid>
        <Grid.Column width={10}>
            <ContactList 
            contacts={contacts} 
            />
        </Grid.Column>
        <Grid.Column width={6}>
        <h2>Add Events</h2>
        </Grid.Column>
    </Grid>
    </Container>
  )
}