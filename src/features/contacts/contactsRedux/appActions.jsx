//action creators

import { CREATE_APP, DELETE_APP } from "./appConstants";

export function createApp(app) {
    return {
        type: CREATE_APP,
        payload: app
    }
}

export function deleteApp(appId) {
    return {
        type: DELETE_APP,
        payload: appId
    }
}