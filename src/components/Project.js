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
  const date = props.data.date;
  const description = props.data.description;
  const preview = props.data.preview;
  const techIcons = props.data.tech;
  const demo = props.data.demo;
  const repo = props.data.repo;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.heading}>{title}</h1>
      </div>
      <div className={`${styles.mainContainer} ${props.flip && `${styles.flip}`}`}>
        <div className={styles.projectDescription}>
          <div className={styles.projectContainer}>
            <h2 className={styles.subheading}>Description</h2>
            <p>{description}</p>
            <h2 className={styles.subheading}>Built date</h2>
            <p>{date}</p>
            <div className={styles.media}>
              {
                demo &&
                <a
                  className={`${styles.shutterOutVertical} ${styles.mediaLink}`}
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>&#10024;</span>Demo
                </a>
              }
              <a
                className={`${styles.shutterOutVertical} ${styles.mediaLink}`}
                href={repo}
                target="_blank"
                rel="noreferrer"
              >
                <Github />Repo
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
          <div className={styles.previewContainer}>
            {preview.map((img, i) => <img src={img} alt={`${title} preview ${i + 1}`} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
