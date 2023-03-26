import React, { FC } from 'react';
import styles from './Portfolio.module.css';

const Portfolio: FC = () => (
  <section>
    <h2 className={styles.subTitle}>Music Player</h2>
    <div className={styles.subGroup}>
      <a
        className={`${styles.highlight} ${styles.link}`}
        href="https://debccheng.com/music-player/"
        target="_blank"
        rel="noreferrer"
      >
        Demo
      </a>
      <a
        className={`${styles.highlight} ${styles.link}`}
        href="https://github.com/debccheng/music-player"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
    <ul className={styles.listGroup}>
      <li className={styles.listItem}>
        A music player made with
        {' '}
        <span className={styles.emphasise}>
          vanilla Typescript, SVG, HTML Audio & Web Audio API
        </span>
        .
      </li>
      <li className={styles.listItem}>
        <span className={styles.emphasise}>Features:</span>
        {' '}
        Play/pause & playlist functionality, audio visualisation, CSS animation,
        compilation with Parcel.js.
      </li>
      <li className={styles.listItem}>
        Compatible with Chrome, Firefox and Safari (Desktop).
      </li>
    </ul>

    <h2 className={styles.subTitle}>Boop a Cat</h2>
    <div className={styles.subGroup}>
      <a
        className={`${styles.highlight} ${styles.link}`}
        href="https://debccheng.com/boop-a-cat/"
        target="_blank"
        rel="noreferrer"
      >
        Demo
      </a>
      <a
        className={`${styles.highlight} ${styles.link}`}
        href="https://github.com/debccheng/boop-a-cat"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
    <ul className={styles.listGroup}>
      <li className={styles.listItem}>
        A whack-a-mole game written with
        {' '}
        <span className={styles.emphasise}>Typescript & React Hooks</span>
        .
      </li>
      <li className={styles.listItem}>
        The game is fully responsive and maintains aspect ratio in different screen sizes across
        Chrome, Safari and Firefox.
      </li>
      <li className={styles.listItem}>
        <span className={styles.emphasise}>Other features:</span>
        {' '}
        Timer, random spawning of cat(s), record of high score in localStorage, CSS animation.
      </li>
      <li className={styles.listItem}>
        All images used in game are drawn with Procreate.
      </li>
    </ul>
  </section>
);

export default Portfolio;
