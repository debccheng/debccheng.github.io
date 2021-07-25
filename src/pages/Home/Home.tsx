import React, { FC } from 'react';
import styles from './Home.module.css';

const Home: FC = () => (
  <section>
    <h1 className={styles.headingTitle}>
      {'Hi, I\'m Deb.'}
    </h1>
    <div className={styles.subGroup}>
      <h2 className={styles.subTitle}>Frontend Dev </h2>
      <span className={styles.divider}>\\</span>
      <h2 className={styles.subTitle}>Pharmacist</h2>
    </div>
  </section>
);

export default Home;
