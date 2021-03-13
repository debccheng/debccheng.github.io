import React from 'react';
import Lazyload from 'react-lazyload';
import styles from './Project.module.css';
import ProjectButton from './ProjectButton';
import Technology from './Technology'
import Placeholder from './Placeholder';

const Project = (props) => {

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
                <ProjectButton url={demo} isRepo={false} />
              }
              <ProjectButton url={repo} isRepo={true} />
              <Technology techIcons={techIcons}/>
            </div>
          </div>
        </div>
        <div className={styles.projectPreview}>
          <Lazyload
            className={styles.previewContainer}
            offset={100}
            once
            debounce={200}
            placeholder={<Placeholder />}
          >
            {preview.map((img, i) => <img className={styles.image} src={img} alt={`${title} preview ${i + 1}`} key={i} />)}
          </Lazyload>
        </div>
      </div>
    </div>
  );
}

export default Project;
