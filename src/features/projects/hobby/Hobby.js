import React from 'react';
import Music from './music/Music';
import { Container, Segment } from 'semantic-ui-react';

function Hobby() {
    
    return(
<Container className='main'>
<Segment.Group>
<Segment >
<Music />
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
