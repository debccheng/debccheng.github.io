import React from 'react';
import {
  Adobephotoshop,
  Adobeillustrator,
  Bootstrap,
  CssThree,
  Cypress,
  Git,
  Github,
  Gnubash,
  Html5,
  Javascript,
  Jest,
  Linkedin,
  MaterialUi,
  Nestjs,
  Perl,
  Postgresql,
  Pycharm,
  Python,
  ReactJs,
  Reactrouter,
  Storybook,
  Typescript,
  Vim,
  Visualstudiocode,
}
  from '@icons-pack/react-simple-icons';
import styles from './About.module.css';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <div className={styles.aboutHeading}>
          <h1>About Me</h1>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutMedia}>
            <img className={styles.profileImg} src={profileImg} alt="the me" />
            <div className={styles.links}>
              <a
                className={styles.underlineFromCenter}
                href="https://github.com/debccheng/"
                target="_blank"
                rel="noreferrer"
              >
                <Github tabIndex="-" />
              </a>
              <a
                className={styles.underlineFromCenter}
                href="https://www.linkedin.com/in/debbie-cheng-9929a4172/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin tabIndex="-1" />
              </a>
            </div>
          </div>
          <div className={styles.aboutText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tincidunt augue,
              eget posuere nunc imperdiet ut. Nunc malesuada, ex dignissim interdum iaculis, risus orci dictum
              ligula, a egestas neque risus euismod ipsum. Aenean in est at justo pharetra placerat at sit amet
              purus. Sed iaculis dolor ac enim imperdiet, id hendrerit justo ultrices. Proin imperdiet velit sed
              purus hendrerit, et placerat arcu faucibus. Aliquam aliquet dolor mattis tristique finibus. In
              in tempus mauris. Vestibulum porttitor fermentum tempor. Quisque interdum ultrices sem in aliquam.
              Nullam sit amet nisl a turpis iaculis tempor tincidunt eget erat. Maecenas mollis leo id tellus
              aliquam, id fringilla tortor accumsan. Sed eu eros lacus. In eget tellus erat. In hac habitasse
              platea dictumst. Fusce lacinia.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.skillBox}>
        <h1>Skills</h1>
        <div className={styles.skillsets}>
          <div className={styles.skillContainer}>
            <div className={styles.subtitle}>
              <h2>Tech</h2>
            </div>
            <div className={styles.iconGroup}>
              <Javascript />
              <Typescript />
              <Html5 />
              <CssThree />
              <Git />
              <Postgresql />
              <Python />
              <Gnubash />
              <Perl />
            </div>
          </div>

          <div className={styles.skillContainer}>
            <div className={styles.subtitle}>
              <h2>Webdev</h2>
            </div>
            <div className={styles.iconGroup}>
              <ReactJs />
              <MaterialUi />
              <Bootstrap />
              <Nestjs />
              <Reactrouter />
              <Jest />
              <Storybook />
              <Cypress />
            </div>
          </div>

          <div className={styles.skillContainer}>
            <div className={styles.subtitle}>
              <h2>Editors</h2>
            </div>
            <div className={styles.iconGroup}>
              <Visualstudiocode />
              <Vim />
              <Pycharm />
            </div>
          </div>

          <div className={styles.skillContainer}>
            <div className={styles.subtitle}>
              <h2>Graphics</h2>
            </div>
            <div className={styles.iconGroup}>
              <Adobephotoshop />
              <Adobeillustrator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
