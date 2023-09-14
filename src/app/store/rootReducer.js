import {combineReducers} from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import eventReducer from '../../features/events/eventReducer';
import contactReducer from '../../features/contacts/contactsRedux/contactReducer';
import appReducer from '../../features/contacts/contactsRedux/appReducer';
import transactionReducer from '../../features/budgetTracker/budgetRedux/transactionsSlice';
import budgetsReducer from '../../features/budgetTracker/budgetRedux/budgetsSlice';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    contact: contactReducer,
    app: appReducer,
    transactions: transactionReducer,
    budgets: budgetsReducer
})

export default rootReducer;