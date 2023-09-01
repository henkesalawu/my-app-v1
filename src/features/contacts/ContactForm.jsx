import cuid from 'cuid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Header, Segment, Container } from 'semantic-ui-react';
import { updateContact, createContact } from './contactActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput';

function ContactForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const selectedContact = useSelector(state => 
        state.contact.contacts.find(c => c.id === id))

    const initialValues = selectedContact ?? {
        name: '',
        email: '',
        phone: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('You must provide a name'),
        email: Yup.string().required('You must provide an email'),
        phone: Yup.string().required('You must provide a phone')
    })

    
  return (
    <Container className='main'>
    <Segment clearing>
        <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
            selectedContact 
        ? dispatch(updateContact({...selectedContact, ...values})) 
        : dispatch(createContact({
            ...values, 
            id: cuid()
        }));
        navigate('/contacts'); 
        }}
        validationSchema={validationSchema}
        >
            <Form className='ui form'>
            <Header sub color='teal' content='Contact Details'/>
            <MyTextInput name='name' placeholder='Name' />
            <MyTextInput name='email' placeholder='E-mail address'/>
            <MyTextInput name='phone' placeholder='Phone number'/>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button type='submit' floated='right'  content='Cancel' as={Link} to='/contacts' />
        </Form>
        </Formik>
    </Segment>
    </Container>
  );
}

export default ContactForm;
