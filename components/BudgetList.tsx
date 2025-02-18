import React, { useState, useEffect } from 'react';
import ExpenseTracker from './ExpenseTracker';
import styles from '../styles/BudgetList.module.css';

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

const BudgetList: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [budgetName, setBudgetName] = useState('');
  const [selectedBudget, setSelectedBudget] = useState<Budget | null>(null);

  useEffect(() => {
    const savedBudgets = localStorage.getItem('budgets');
    if (savedBudgets) {
      setBudgets(JSON.parse(savedBudgets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  const addBudget = () => {
    const newBudget: Budget = {
      id: budgets.length + 1,
      name: budgetName,
      expenses: [],
    };
    setBudgets([...budgets, newBudget]);
    setBudgetName('');
  };

  const handleBudgetClick = (budget: Budget) => {
    setSelectedBudget(budget);
  };

  const removeBudget = (budgetId: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click event from propagating to the budget container
    const updatedBudgets = budgets.filter((budget) => budget.id !== budgetId);
    setBudgets(updatedBudgets);
    if (selectedBudget && selectedBudget.id === budgetId) {
      setSelectedBudget(null);
    }
  };

  const addExpense = (budgetId: number, expense: Expense) => {
    const updatedBudgets = budgets.map((budget) => {
      if (budget.id === budgetId) {
        const updatedBudget = { ...budget, expenses: [...budget.expenses, expense] };
        if (selectedBudget && selectedBudget.id === budgetId) {
          setSelectedBudget(updatedBudget);
        }
        return updatedBudget;
      }
      return budget;
    });
    setBudgets(updatedBudgets);
  };

  const removeExpense = (budgetId: number, expenseIndex: number) => {
    const updatedBudgets = budgets.map((budget) => {
      if (budget.id === budgetId) {
        const updatedExpenses = budget.expenses.filter((_, index) => index !== expenseIndex);
        const updatedBudget = { ...budget, expenses: updatedExpenses };
        if (selectedBudget && selectedBudget.id === budgetId) {
          setSelectedBudget(updatedBudget);
        }
        return updatedBudget;
      }
      return budget;
    });
    setBudgets(updatedBudgets);
  };

  return (
    <div className={styles.container}>
      {selectedBudget ? (
        <div>
          <button className={styles.backButton} onClick={() => setSelectedBudget(null)}>Back to Budget List</button>
          <h2>{selectedBudget.name}</h2>
          <ExpenseTracker budget={selectedBudget} addExpense={addExpense} removeExpense={removeExpense} />
        </div>
      ) : (
        <div>
          <h2>Budget Manager</h2>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="Budget Name"
              value={budgetName}
              onChange={(e) => setBudgetName(e.target.value)}
            />
            <button onClick={addBudget}>Add Budget</button>
          </div>
          <div className={styles.budgets}>
            {budgets.map((budget) => (
              <div key={budget.id} className={styles.budget} onClick={() => handleBudgetClick(budget)}>
                <h3>{budget.name}</h3>
                <button onClick={(event) => removeBudget(budget.id, event)}>Remove Budget</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetList;