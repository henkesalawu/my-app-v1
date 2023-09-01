import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deleteContact} from './contactActions'

function ContactItem({contact}) {
  const dispatch = useDispatch();
  console.log(contact, contact.id)

  return (
    <Table.Row>
        <Table.Cell>{contact.name}</Table.Cell>
        <Table.Cell>{contact.email}</Table.Cell>
        <Table.Cell>{contact.phone}</Table.Cell>
        <Table.Cell>
            <Button 
            onClick={() => dispatch(deleteContact(contact.id))}
            color='red' 
            floated='right' 
            content='Delete'/>
            <Button as={Link} to={`/update/${contact.id}`} color="orange" floated="right">
            Update Contact
        </Button>
        </Table.Cell>
    </Table.Row>
  )}

  export default ContactItem;