import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

function NavBar({setFormOpen}) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(true);

  function handleSignOut() {
    setAuthenticated(false);
    navigate('/');
  }

  return (
    <Menu inverted fixed='top'>
    <Container>
      <Menu.Item as={NavLink} exact to='/home' header>
        <img src="/assets/mermaidlogo.png" alt='logo' style={{marginRight: 15}}/>
        Wanda Henke-Salawu
      </Menu.Item>
      <Menu.Item as={NavLink} to='/about' name='About'/>
      <Menu.Item as={NavLink} to='/projects' name='Projects'/>
      <Menu.Item as={NavLink} to='/diy' name='DIY'/>
      <Menu.Item as={NavLink} to='/hobby' name='Hobby'/>

      {authenticated &&
        <>
      <Menu.Item as={NavLink} to='/events' name='Events'/>
      <Menu.Item as={NavLink} to='/contacts' name='Contacts'/>
      <Menu.Item as={NavLink} to='/budgetTracker' name='Budget Tracker'/>
      <Menu.Item as={NavLink} to='/createEvent'>
        <Button positive inverted content='Add Event' />
      </Menu.Item>
      </>
      }
      {authenticated 
      ? <SignedInMenu 
      setAuthenticated={setAuthenticated}
      signOut={handleSignOut}
      /> 
      : <SignedOutMenu setAuthenticated={setAuthenticated}/>}
    </Container>

    </Menu>
  )
}

export default NavBar
