//action creators

import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./contactConstants";

export function createContact(contact) {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}

export function updateContact(contact) {
    return {
        type: UPDATE_CONTACT,
        payload: contact
    }
}

export function deleteContact(contactId) {
    return {
        type: DELETE_CONTACT,
        payload: contactId
    }
}