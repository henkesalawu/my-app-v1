import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

function App() {
  const location = useLocation();
  console.log(location.pathname);


  return (
    <>
    {location.pathname !== '/' && <NavBar />}
    <Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route path='/events' element={<EventDashboard />}/>
    <Route path='/events/:id' element={<EventDetailedPage/>}/>
    <Route path={['/createEvent', '/manage/:id']} element={<EventForm/>}/>  
    </Routes>
   </>
  );
}

export default App;
