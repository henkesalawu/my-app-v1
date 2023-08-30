import React from "react";
import { Button, Table, Icon, TableHeader} from 'semantic-ui-react';

export const ContactList = ({contacts}) => {
    return (
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                    <Table.HeaderCell>Phone number</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
            {contacts.map((contact) => (
                
            <Table.Row>
                <Table.Cell>{contact.name}</Table.Cell>
                <Table.Cell>{contact.email}</Table.Cell>
                <Table.Cell>{contact.phone}</Table.Cell>
            </Table.Row>
            
        ))}
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                    <Button
                    floated='right'
                    icon
                    labelPositon='left'
                    primary
                    size='small'
                    >
                        <Icon name='user' /> Add Contact
                    </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}