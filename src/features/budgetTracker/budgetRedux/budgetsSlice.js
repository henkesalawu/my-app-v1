import { CATEGORIES } from "../../../app/api/budgetData";
import {createSlice} from'@reduxjs/toolkit';


const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0
}));

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      state.map((budget) => {
        if (budget.category === action.payload.category) {
          budget.amount = action.payload.amount;
        }
        return budget;
      });
    }
  }
});

export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;
export const { editBudget } = budgetsSlice.actions;