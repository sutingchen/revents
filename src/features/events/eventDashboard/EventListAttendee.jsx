import React from 'react';
import { Image, List } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sampleData';

export default function EventListAttendee({attendee}) {
    
    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL}/>
        </List.Item>
    );
}