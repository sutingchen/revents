import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }) {
  // 1. Declare a state variable
  // 2. Declare a function that can update the state variable
  const [events, setEvents] = useState(sampleData);
  
  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  // 1. Get hold of the event we want to update
  // 2. Swap the existing event for the updated event
  // 3. Return the event to the setEvents function
  function handleUpdateEvent(updatedEvent) {
    setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
    selectEvent(null);
  }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter(evt => evt.id !== eventId));
    selectEvent(null);
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
