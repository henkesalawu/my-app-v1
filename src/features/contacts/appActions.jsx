//action creators

import { CREATE_APP, DELETE_APP, UPDATE_APP } from "./appConstants";

export function createApp(app) {
    return {
        type: CREATE_APP,
        payload: app
    }
}

export function updateApp(app) {
    return {
        type: UPDATE_APP,
        payload: app
    }
}

export function deleteApp(appId) {
    return {
        type: DELETE_APP,
        payload: appId
    }
}