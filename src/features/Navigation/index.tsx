import React from 'react';
import FloatingNav from './components/FloatingNav';
import Navigation from './components/Navigation';
import styles from './styles/index.module.css';
function NavigationWrapper() {
  return (
    <>
      <span aria-labelledby='navigation_bar' className={`${styles.Navigation}`}>  <Navigation /></span>
      <span aria-labelledby='mobile_navigation_bar' className={`${styles.FloatingNav}`}> <FloatingNav /></span>

    </>
  );
}

export default NavigationWrapper;