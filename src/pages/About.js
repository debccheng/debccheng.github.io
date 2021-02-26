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
                <Github tabIndex="-1" />
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
              Hi, I'm Deb and I'm a pharmacist. Despite my healthcare background, I've always
              had a bit of artistic flair and loved making things, ranging widely from
              assembling Pokemon Nanoblocks to drawing illustrations for an imaginary storyline.
              I enjoy spending time perfecting each of my little endeavours and sharing the
              result with others in the end, so it's not surprising I became quite enthusiastic
              when I discovered webdev.
            </p>
            <p>
              I self-learned Javascript and Typescript before finally completing Graduate
              Certificate in Computing at UNSW, Sydney in Dec 2020. Even now I'm still
              constantly learning new things about frontend through personal projects.
            </p>
            <p>
              On my days off when I'm not coding you'll likely find me drawing, jogging, 
              travelling for a cup of good coffee or be on the hunt for the best
              shakshouka in town.
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
