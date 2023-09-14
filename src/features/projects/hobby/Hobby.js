import React from 'react';
import MusicPlayer from './musicPage/MusicPlayer';
import { Container, Segment } from 'semantic-ui-react';

function Hobby() {
    
    return(
<Container className='main'>
<Segment.Group>
<Segment >
<MusicPlayer />
</Segment>
<Segment>
</Segment>
<Segment>
</Segment>
</Segment.Group>
</Container>
    );
}

export default Hobby;
