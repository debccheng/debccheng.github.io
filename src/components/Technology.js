import React, { useState } from 'react';
import styles from './Technology.module.css';

const Technology = ({ techIcons }) => {
  const [showIcons, setShowIcons] = useState(true);
  const showTech = () => {
    setShowIcons(!showIcons);
  }
  return (
    <div className={styles.techWrapper}>
      <div
        className={`${styles.tech} ${showIcons ? `${styles.showIcons}` : `${styles.hideIcons}`}`}
        tabIndex="-1"
      >
        <button
          className={styles.techButton}
          onClick={showTech}
        >
          Tech
        </button>
        <div className={styles.iconGroup}>
          {techIcons}
        </div>
      </div>
    </div>
  );
}

export default Technology;
