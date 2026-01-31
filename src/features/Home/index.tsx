import React from 'react';
import Navigation from '@features/Navigation';
import styles from './styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home_page}>
      <Navigation />

    </div>
  );
};

export default Home;