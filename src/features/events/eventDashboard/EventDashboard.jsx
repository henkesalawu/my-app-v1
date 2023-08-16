import React, { useState } from 'react'
import { Button, Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';
import {sampleData} from '../../../app/api/sampleData';

export default function EventDashboard({formOpen, setFormOpen}) {
  const [events, setEvents] = useState(sampleData);

  return (
    <Grid>
        <Grid.Column width={10}>
            <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
        {formOpen && <EventForm setFormOpen={setFormOpen}/>}
        </Grid.Column>
    </Grid>
  )
}


