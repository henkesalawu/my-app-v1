import React from 'react';
import ProjectItem from './ProjectItem';
import projectRoutes from './projectRoutes';
import './Projects.css'
import { Reveal, Image, Container, Icon, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Projects() {
//getting events from event object thats in store
//get events directly from store

  return (
    <Container className='main'>
   <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ProjectItem
              src='assets/images/investment_calculator.jpg'
              text='Investment Calculator'
              path={projectRoutes.INVEST}
            />
            <ProjectItem
              src='assets/images/userApp.jpg'
              text='User App'
              path={projectRoutes.USERAPP}
            />
            </ul>
            <ul className='cards__items'>
            <ProjectItem
              src='assets/images/expenseApp.jpg'
              text='Expense App'
              path={projectRoutes.EXPENSES}
            />
            <ProjectItem
              src='assets/images/weather.jpg'
              text='Weather App'
              path={projectRoutes.WEATHER}
              />
              <ProjectItem
              src='assets/images/table.jpg'
              text='Employees App'
              path={projectRoutes.EMPLOYEES}
              />
              </ul>
        </div>
      </div>
    </div>
    </Container>
  )
}
