import {createSlice} from'@reduxjs/toolkit';
import { CATEGORIES } from '../../../app/api/budgetData';

const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      state[action.payload.category].push(action.payload); 
    },
    deleteTransaction: (state, action) => {
       const newTransactionsForCategory = state[action.payload.category].filter(
        (trans) => trans.id !== action.payload.id
      )
      return {
        ...state,
        [action.payload.category]: newTransactionsForCategory
      }
  }
}
})


export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);


export default transactionsSlice.reducer;
export const {addTransaction, deleteTransaction} = transactionsSlice.actions;
