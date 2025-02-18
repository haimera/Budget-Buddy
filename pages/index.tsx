import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ModalWrapper from '../components/ModalWrapper';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import styles from '../styles/LandingPage.module.css';

const BudgetList: React.FC = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to Budget Buddy</h1>
        <p className={styles.description}>Your one-stop solution for managing your finances.</p>
        <div className={styles.buttons}>
          <button className={styles.secondaryButton} onClick={() => setIsRegisterFormOpen(true)}>Register</button>
          <button className={styles.loginButton} onClick={() => setIsLoginFormOpen(true)}>Login</button>
        </div>
      </div>
      <ModalWrapper isOpen={isLoginFormOpen} onRequestClose={() => setIsLoginFormOpen(false)}>
        <LoginForm onClose={() => setIsLoginFormOpen(false)} />
      </ModalWrapper>
      <ModalWrapper isOpen={isRegisterFormOpen} onRequestClose={() => setIsRegisterFormOpen(false)}>
        <RegisterForm onClose={() => setIsRegisterFormOpen(false)} />
      </ModalWrapper>
    </div>
  );
};

export default BudgetList;