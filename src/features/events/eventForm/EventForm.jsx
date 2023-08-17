import cuid from 'cuid';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Segment, Container } from 'semantic-ui-react';

function EventForm({
    setFormOpen, 
    setEvents, 
    createEvent, 
    selectedEvent, 
    updateEvent}) {

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const [values, setValues]=useState(initialValues);

    console.log(selectedEvent);

    function handleFormSubmit() {
        selectedEvent 
        ? updateEvent({...selectedEvent, ...values}) 
        : createEvent({...values, id: cuid(), hostedBy: 'Bob', attendees: [], hostPhotoURL: '/assets/user.png'});
        
        setFormOpen(false);
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        

    }
    
  return (
    <Container className='main'>
    <Segment clearing>
        <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
        <Form onSubmit={handleFormSubmit}>
            <Form.Field>
                <input 
                type='text' 
                name='title'
                placeholder='Event title' 
                value={values.title}
                onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                type='text' 
                placeholder='Category'
                name='category'
                value={values.category}
                onChange={(e) => handleInputChange(e)}

                />
            </Form.Field>
            <Form.Field>
                <input 
                type='text' 
                placeholder='Description'
                name='description'
                value={values.description}
                onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input 
                type='text' 
                placeholder='City'
                value={values.city}
                onChange={(e) => handleInputChange(e)}
                name='city'
                />
            </Form.Field>
            <Form.Field>
                <input 
                type='text' 
                placeholder='Venue'
                value={values.venue}
                onChange={(e) => handleInputChange(e)}
                name='venue'
                />
            </Form.Field>
            <Form.Field>
                <input 
                type='date' 
                placeholder='Date'
                value={values.date}
                onChange={(e) => handleInputChange(e)}
                name='date'
                />
            </Form.Field>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button type='submit' floated='right'  content='Cancel' as={Link} to='/events' />
        </Form>
    
    </Segment>
    </Container>
    
  )
}

export default EventForm;
