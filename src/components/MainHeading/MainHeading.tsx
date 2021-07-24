import React, { FC } from 'react';
import styles from './MainHeading.module.css';

const MainHeading: FC = () => (
  <header className={styles.headingWrapper}>
    <h1 className={styles.headingTitle}>Deb.</h1>
    <div className={styles.subGroup}>
      <h2 className={styles.subTitle}>Frontend Dev </h2>
      <span className={styles.divider}>\\</span>
      <h2 className={styles.subTitle}>Pharmacist</h2>
    </div>
  </header>
);

export default MainHeading;
