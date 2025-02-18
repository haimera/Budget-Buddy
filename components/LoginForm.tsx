import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/LoginForm.module.css';

const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (userId.trim() === '' || password.trim() === '') {
      alert('User ID and password cannot be empty');
      return;
    }

    const storedUserId = localStorage.getItem('userId');
    const storedPassword = localStorage.getItem('password');

    if (userId === storedUserId && password === storedPassword) {
      router.push('/UserHome'); // Navigate to the UserHome page
    } else {
      alert('Invalid user ID or password');
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
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
        <button className={styles.primaryButton} onClick={handleLogin}>Login</button>
        <button className={styles.secondaryButton} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginForm;