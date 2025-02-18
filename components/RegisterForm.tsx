import React, { useState } from 'react';
import styles from '../styles/RegisterForm.module.css';

const RegisterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('password', password);
    alert('User registered successfully');
  };

  return (
    <div className={styles.registerForm}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.formButtons}>
        <button className={styles.primaryButton} onClick={handleRegister}>Register</button>
        <button className={styles.secondaryButton} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default RegisterForm;