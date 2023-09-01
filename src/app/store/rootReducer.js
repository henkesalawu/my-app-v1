import {combineReducers} from 'redux';
import testReducer from '../../features/sandox/testReducer';
import eventReducer from '../../features/events/eventReducer';
import contactReducer from '../../features/contacts/contactReducer';
import appReducer from '../../features/contacts/appReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    contact: contactReducer,
    app: appReducer,

})

export default rootReducer;