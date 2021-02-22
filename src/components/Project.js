import React, { useState } from 'react';
import {
  Github
} from '@icons-pack/react-simple-icons';
import styles from './Project.module.css';

const Project = (props) => {
  const [showIcons, setShowIcons] = useState(true);
  const showTech = () => {
    setShowIcons(!showIcons);
  }

  const title = props.data.title;
  const description = props.data.description;
  const previewTitle = props.data.previewTitle;
  const preview = props.data.preview;
  const techIcons = props.data.tech;
  const demo = props.data.demo;
  const repo = props.data.repo;

  return (
    <div className={`${styles.box} ${props.flip && `${styles.flip}`}`}>
      <div className={styles.projectDescription}>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.projectContainer}>
          <h2 className={styles.subheading}>Description</h2>
          <p>{description}</p>
          <div className={styles.media}>
            <a
              className={`${styles.shutterOutVertical} ${styles.mediaLink}`}
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              <span>&#10024;</span>Demo
            </a>
            <a
              className={`${styles.shutterOutVertical} ${styles.mediaLink}`}
              href={repo}
              target="_blank"
              rel="noreferrer"
            >
              <Github/>Repo
            </a>
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
          </div>
        </div>
      </div>
      <div className={styles.projectPreview}>
        <h1 className={styles.heading}>{previewTitle}</h1>
        <div className={styles.previewContainer}>
          <img src={preview} alt={`preview of ${title}`} />
        </div>
      </div>
    </div>
  );
}

export default Project;
