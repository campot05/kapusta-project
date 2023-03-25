export const getTransactions = state => state.transactions.transactions;

export const selectExpenseCategories = state =>
  state.transactions.expenseCategory;

export const getTransByDate = state => state.transactions.transByDate;

export const getDateTransaction = state => state.transactions.date;

export const getExpensesTrans = state => state.transactions.transExpense;

export const getExpensesMonthStats = state =>
  state.transactions.expensesMonthStats;

export const getIncomesTrans = state => state.transactions.transIncome;

export const getIncomesMonthStats = state =>
  state.transactions.incomeMonthStats;

export const selectIncomeCategories = state =>
  state.transactions.incomeCategory;
