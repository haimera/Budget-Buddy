import React from 'react';
import Navbar from '../components/Navbar';
import BudgetList from '../components/BudgetList';
import styles from '../styles/Home.module.css';

const UserHome: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <p className={styles.description}>Manage your budgets and expenses here.</p>
        <BudgetList />
      </div>
    </div>
  );
};

export default UserHome;
