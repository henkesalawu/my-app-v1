import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import IntroPage from '../../features/introPage/IntroPage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import ContactsPage from '../../features/contacts/ContactsPage';
import BudgetTracker from '../../features/budgetTracker/BudgetTracker';
import HomeDashboard from '../../features/homeDashboard/HomeDashboard';
import ContactForm from '../../features/contacts/ContactForm';
import Projects from '../../features/projects/Projects';
import InvestCalc from '../../features/projects/investCalc/InvestCalc';
import UserApp from '../../features/projects/userApp/UserApp'
import ExpenseApp from '../../features/projects/expensesApp/ExpenseApp';
import WeatherApp from '../../features/projects/weatherApp/WeatherApp';
import EmployeesApp from '../../features/projects/employees/EmployeesApp';
import EmployeesAdd from '../../features/projects/employees/EmployeesAdd';
import EmployeesEdit from '../../features/projects/employees/EmployeesEdit';
import Hobby from '../../features/projects/hobby/Hobby';

function App() {
  const {key, pathname} = useLocation();

  return (
    <>
    {pathname !== '/' && <NavBar />}
    <Routes>
    <Route exact path='/' element={<IntroPage/>}/>
    <Route exact path='/home' element={<HomeDashboard/>}/>
    <Route path='/events' element={<EventDashboard />}/>
    <Route path='/contacts' element={<ContactsPage/>}/>
    <Route path='/budgetTracker' element={<BudgetTracker/>}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/invest' element={<InvestCalc /> }/>
    <Route path='/userapp' element={<UserApp />}/>
    <Route path='/expenses' element={<ExpenseApp />}/>
    <Route path='/weather' element={<WeatherApp />}/>
    <Route path='/employees' element={<EmployeesApp />}/>
    <Route path='/employees/edit' element={<EmployeesEdit />}/>
    <Route path='/employees/create' element={<EmployeesAdd />}/>
    <Route path='/hobby' element={<Hobby />}/>


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
