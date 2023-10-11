import {combineReducers} from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import eventReducer from '../../features/events/eventReducer';
import contactReducer from '../../features/contacts/contactsRedux/contactReducer';
import appReducer from '../../features/contacts/contactsRedux/appReducer';
import transactionReducer from '../../features/budgetTracker/budgetRedux/transactionsSlice';
import budgetsReducer from '../../features/budgetTracker/budgetRedux/budgetsSlice';
import topicsReducer from '../../features/projects/quizzCreator/features/topics/topicsSlice';
import quizzesReducer from '../../features/projects/quizzCreator/features/quizzes/quizzesSlice';
import cardsReducer from '../../features/projects/quizzCreator/features/cards/cardsSlice';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    contact: contactReducer,
    app: appReducer,
    transactions: transactionReducer,
    budgets: budgetsReducer,
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
})

export default rootReducer;