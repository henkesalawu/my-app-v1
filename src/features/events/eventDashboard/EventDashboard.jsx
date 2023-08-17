import React, { useState } from 'react'
import {Grid, Container } from 'semantic-ui-react';
import EventList from '../eventList/EventList';

import {sampleData} from '../../../app/api/sampleData';

export default function EventDashboard() {

  const [events, setEvents] = useState(sampleData);


 // function handleCreateEvent(event) {
 //   setEvents([...events, event])
//  }

//  function handleUpdateEvent(udpatedEvent) {
 //   setEvents(events.map(evt => evt.id === udpatedEvent.id ? udpatedEvent : evt));
//    selectEvent(null);
//  }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter(evt => evt.id !== eventId))
  }

  return (
    <Container className='main'>
    <Grid>
        <Grid.Column width={10}>
            <EventList 
            events={events} 
            deleteEvent={handleDeleteEvent}
            />
        </Grid.Column>
        <Grid.Column width={6}>
        <h2>Event filters</h2>
        </Grid.Column>
    </Grid>
    </Container>
  )
}


