import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react'

function HomePage() {
    const navigate = useNavigate();
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
        <Container>
        <Header as='h1' inverted >
            <Image size='massive' src='/assets/logo.png' style={{marginBottom: 12}} />
            Re-events
        </Header>
        <Button onClick={() => navigate('/events')} size='huge' inverted>
            Get started
            <Icon name='right arrow' inverted />
        </Button>
        </Container>
    </Segment>
  )
}

export default HomePage
