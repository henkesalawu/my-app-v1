import {appData} from '../../app/api/appData';
import { CREATE_APP, DELETE_APP, UPDATE_APP } from './appConstants';

const initialState = {
    apps: appData
}

export default function contactReducer(state = initialState, {type, payload}) {
    switch(type) {
        case CREATE_APP:
            return {
                ...state,
                apps: [...state.apps, payload]
            };
        case UPDATE_APP:
            return {
                ...state,
                apps: [...state.apps.filter(app => app.id !== payload.id), payload]
            };
        case DELETE_APP:
            return {
                ...state,
                apps: [...state.apps.filter(app => app.id !== payload)]
            };
        default:
            return state;
    }
}