import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData';

export default function EventDashboard({formOpen, setFormOpen}) {

  // 1. Declare a state variable
  // 2. Declare a function that can update the state variable
  const [events, setEvents] = useState(sampleData);
  

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && <EventForm setFormOpen={setFormOpen}/>}
      </Grid.Column>
    </Grid>
  );
}
