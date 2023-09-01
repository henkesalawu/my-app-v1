import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Header} from 'semantic-ui-react';
import ContactPicker from './ContactPicker';
import { Formik, Form } from 'formik';
import MyTextInput from '../../app/common/form/MyTextInput';
import { Link, useParams } from 'react-router-dom';
import { updateApp, createApp } from './appActions';
import cuid from 'cuid';

function AppointmentForm({contacts}) {
    const dispatch = useDispatch();
    const {id} = useParams();
    const selectedApp = useSelector(state => 
        state.app.apps.find(a => a.id === id))
 
    const initialValues = selectedApp ?? {
        title: '',
        contact: '',
        venue: '',
        date: '',
        time:'' ,
    };

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
            selectedApp
        ? dispatch(updateApp({...selectedApp, ...values})) 
        : dispatch(createApp({
            ...values, 
            id: cuid(), 
        }));
        }}>
        <Form className='ui form'>
            <Header sub color='teal' content='Add appointment'/>
            <MyTextInput name='title' placeholder='Title' />
            <ContactPicker contacts={contacts} />
            <MyTextInput name='venue' placeholder='Venue'/>
            <MyTextInput name='date' placeholder='Date' type='date'/>
            <MyTextInput name='time' placeholder='Time' type='time'/>

            <Button type='submit' floated='right' positive content='Add appointment' />
            <Button type='submit' floated='right'  content='Cancel' as={Link} to='/contacts' />
        </Form>
        </Formik>
  )
}

export default AppointmentForm;
