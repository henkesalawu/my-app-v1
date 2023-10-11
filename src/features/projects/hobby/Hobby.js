import React from 'react';
import MusicPlayer from './musicPage/MusicPlayer';
import { Container, Divider, Grid, Segment } from 'semantic-ui-react';

function Hobby() {
    
    return(
<Container className='main'>
<Segment.Group>
<Segment >
<Grid columns={2} textAlign='center'>
<Divider vertical></Divider>
<Grid.Row verticalAlign='middle'>
    <Grid.Column>
    <h1>Music</h1>
    <MusicPlayer />
    </Grid.Column>
    <Grid.Column>
    <h1>Dance</h1>
    <iframe width="520" height="315" src="https://www.youtube.com/embed/myXrxd5zzK0?si=iAsbfSrk9HtfdbmF&amp;start=105" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Grid.Column>
</Grid.Row>
</Grid>
</Segment>
<Segment textAlign='center'>
</Segment>
<Segment>
</Segment>
</Segment.Group>
</Container>
    );
}

export default Hobby;
