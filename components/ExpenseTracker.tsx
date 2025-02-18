import React, { useState, useEffect } from 'react';
import styles from '../styles/ExpenseList.module.css';

interface Expense {
  description: string;
  amount: number;
  date: string;
  type: string;
}

interface Budget {
  id: number;
  name: string;
  expenses: Expense[];
}

interface ExpenseTrackerProps {
  budget: Budget;
  addExpense: (budgetId: number, expense: Expense) => void;
  removeExpense: (budgetId: number, expenseIndex: number) => void;
}

const ExpenseList: React.FC<ExpenseTrackerProps> = ({ budget, addExpense, removeExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense');
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    calculateTotals();
  }, [budget.expenses]);

  const calculateTotals = () => {
    let income = 0;
    let expenses = 0;
    budget.expenses.forEach((expense) => {
      if (expense.type === 'income') {
        income += expense.amount;
      } else {
        expenses += expense.amount;
      }
    });
    setTotalIncome(income);
    setTotalExpenses(expenses);
    setBalance(income - expenses);
  };

  const handleAddExpense = () => {
    const newExpense = { description, amount: parseFloat(amount), date, type };
    addExpense(budget.id, newExpense);
    setDescription('');
    setAmount('');
    setDate('');
    setType('expense');
  };

  return (
    <div>
      {/* <h3>Expenses for {budget.name}</h3> */}
      <ul className={styles.expenses}>
        {budget.expenses.slice(-10).map((expense, index) => (
          <li key={index} className={styles.expense}>
            {expense.description}: ${expense.amount.toFixed(2)} on {expense.date} ({expense.type})
            <button onClick={() => removeExpense(budget.id, index)}>Remove Expense</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button onClick={handleAddExpense}>Add</button>
      <div className={styles.totals}>
        <div className={styles.totalsColumn}>
          <div className={styles.totalIncome}>Total Income: ${totalIncome.toFixed(2)}</div>
          <div className={styles.totalExpenses}>Total Expenses: ${totalExpenses.toFixed(2)}</div>
        </div>
        <div className={styles.balance}>Balance: ${balance.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ExpenseList;