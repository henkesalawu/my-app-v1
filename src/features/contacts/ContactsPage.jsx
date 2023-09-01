import React, {useMemo} from 'react';
import { NavLink} from 'react-router-dom';
import {Grid, Container, Button, Icon, Segment, Header} from 'semantic-ui-react';
import {ContactList} from './ContactList.jsx';
import { useSelector } from 'react-redux';
import AppointmentForm from './AppointmentForm.jsx';
import { AppList } from './AppList.jsx';


export default function ContactsPage() {
//getting events from event object thats in store
//get events directly from store
const {contacts} = useSelector(state => state.contact);
console.log(contacts)
const {apps} = useSelector(state => state.app)


  return (
    <Container className='main'>
    <Grid>
        <Grid.Column width={10}>
        <Button
                    floated='center'
                    labelPositon='left'
                    color='green'
                    size='large'
                    as={NavLink} to='/addContact'>
                        <Icon name='user' /> Add Contact

        </Button>
            <ContactList 
            contacts={contacts} 
            />
        </Grid.Column>
        <Grid.Column width={6}>
        <Segment clearing>
       <AppointmentForm contacts={contacts}/>
       </Segment>
       <Segment>
       <Header style={{color:'black'}} textAlign='center'>Appointments</Header>
       <AppList apps={apps} />
       </Segment>
        </Grid.Column>
    </Grid>
    </Container>
  )
}