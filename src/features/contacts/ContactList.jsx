import React from "react";
import { Table} from 'semantic-ui-react';
import ContactItem from "./ContactItem";

export const ContactList = ({contacts}) => {

    return (
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                    <Table.HeaderCell>Phone number</Table.HeaderCell>
                    <Table.HeaderCell>Manage</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {contacts.map((contact) => (
      <ContactItem 
      contact={contact} 
      key={contact.id} 
      />
            
        ))}
            </Table.Body>
        </Table>
    )
}