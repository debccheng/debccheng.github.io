import React from 'react';
import { Github } from '@icons-pack/react-simple-icons';
import styles from './ProjectButton.module.css';


const ProjectButton = ({ url, isRepo }) => {
  return (
    <>
      {isRepo ?
        <a
          className={`${styles.shutterOutVertical} ${styles.mediaLink}`}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <Github />Repo
        </a> :
        <a
          className={`${styles.shutterOutVertical} ${styles.mediaLink}`}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <span>&#10024;</span>Demo
        </a>
      }
    </>
  );
}

export default ProjectButton;
