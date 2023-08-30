import React from 'react';
import CardItem from './CardItem';
import projectRoutes from './projectRoutes';
import './Cards.css'

export default function Dashboard() {
//getting events from event object thats in store
//get events directly from store

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/images/about.jpg'
              text='About me'
              label='Bio'
              path={projectRoutes.ABOUT}
            />
            <CardItem
              src='assets/images/diy.jpg'
              text='DIY projects'
              label='DIY'
              path={projectRoutes.DIY}
            />
            <CardItem
              src='assets/images/work.jpg'
              text='Practice projects'
              label='React/JS'
              path={projectRoutes.PROJECTS}
            />
            <CardItem
              src='assets/images/music.jpg'
              text='Music, dance & other'
              label='Hobby'
              path={projectRoutes.HOBBY}
              />
              </ul>
        </div>
      </div>
    </div>
  )
}
