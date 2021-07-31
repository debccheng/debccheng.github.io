import React, { FC } from 'react';
import styles from './About.module.css';

const Home: FC = () => (
  <section>
    <h1 className={styles.headingTitle}>
      {'Hi, I\'m Deb.'}
    </h1>
    <div className={styles.subGroup}>
      <h2 className={styles.subTitle}>Frontend Dev</h2>
      <span className={styles.divider}>/</span>
      <h2 className={styles.subTitle}>Pharmacist</h2>
      <span className={styles.divider}>@</span>
      <h2 className={styles.subTitle}>Sydney</h2>
    </div>
    <ul className={styles.listGroup}>
      <li className={styles.listItem}>
        {'Transitioned to web dev from pharmacy in 2021.\
        Currently working full-time at '}
        <a
          className={styles.highlight}
          href="https://www.oneflare.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Oneflare
        </a>
        .
      </li>
      <li className={styles.listItem}>
        Completed Graduate Certificate of Computing at UNSW in Dec. 2020.
      </li>
      <li className={styles.listItem}>
        Began my programming journey by self-learning JavaScript & TypeScript.
      </li>
    </ul>
    <div className={styles.subGroup}>
      <button className={styles.aboutButton} type="button">TechStack</button>
    </div>
  </section>
);

export default Home;
