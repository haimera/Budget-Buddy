import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleBackToLandingPage = () => {
    router.push('/'); // Navigate to index page
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Budget Buddy</div>
      <button className={styles.backButton} onClick={handleBackToLandingPage}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;