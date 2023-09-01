import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import ContactsPage from '../../features/contacts/ContactsPage';
import Dashboard from '../../features/dashboard/Dashboard';
import ContactForm from '../../features/contacts/ContactForm';

function App() {
  const {key, pathname} = useLocation();

  return (
    <>
    {pathname !== '/' && <NavBar />}
    <Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route exact path='/home' element={<Dashboard/>}/>
    <Route path='/events' element={<EventDashboard />}/>
    <Route path='/contacts' element={<ContactsPage/>}/>

    <Route path='/events/:id' element={<EventDetailedPage/>}/>
    <Route path='/createEvent' element={<EventForm/>}/>
    <Route path='/manage/:id' element={<EventForm/>} key={key}/>
    <Route path='/update/:id' element={<ContactForm/>} key={key}/>
    <Route path='/addContact' element={<ContactForm />}/>

    </Routes>
   </>
  );
}

export default App;
