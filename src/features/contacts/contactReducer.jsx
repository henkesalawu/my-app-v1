import {contactData} from '../../app/api/contactData';
import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from './contactConstants';

const initialState = {
    contacts: contactData
}

export default function contactReducer(state = initialState, {type, payload}) {
    switch(type) {
        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, payload]
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts.filter(con => con.id !== payload.id), payload]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts.filter(con => con.id !== payload)]
            };
        default:
            return state;
    }
}