import React, { FC } from 'react';
import styles from './MainHeading.module.css';
import Navbar from './components/Navbar/Navbar';

const MainHeading: FC = () => (
  <header className={styles.headingWrapper}>
    <Navbar />
    <h1 className={styles.headingTitle}>
      {'Hi, I\'m Deb.'}
    </h1>
    <div className={styles.subGroup}>
      <h2 className={styles.subTitle}>Frontend Dev </h2>
      <span className={styles.divider}>\\</span>
      <h2 className={styles.subTitle}>Pharmacist</h2>
    </div>
  </header>
);

export default MainHeading;
