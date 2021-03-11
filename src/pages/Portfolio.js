/* eslint-disable no-multi-str */
import React from 'react';
import styles from './Portfolio.module.css';
import Project from '../components/Project';
import {
  CssThree,
  Cypress,
  Html5,
  Jest,
  MaterialUi,
  Reactrouter,
  ReactJs,
  Javascript,
  Typescript
} from '@icons-pack/react-simple-icons';
import ccCheckerImg from '../assets/projects/colour_contrast_checker.png';
import bigBrainImg1 from '../assets/projects/bigbrain1.png';
import bigBrainImg2 from '../assets/projects/bigbrain2.png';
import quickpic from '../assets/projects/quickpic.jpg';
import react2048Img from '../assets/projects/previews/react2048_preview.png';
import boopACatImg from '../assets/projects/previews/boopacat_preview.png';

const Portfolio = () => {
  const boopACat = {
    title: 'Boop a Cat',
    date: 'Mar 2021',
    description:
      'A whack-a-mole inspired game coded with Typescript, where I further learned \
      to use advance React hooks such as useReducer and useCallback. The game \
      maintains its aspect ratio regardless of screen size, and is animated with css. \
      Record of highscore is stored in LocalStorage. Playable on Chrome, Firefox and \
      Safari. All images used in game were illustrated by me with Procreate.',
      tech: <><Typescript/><ReactJs /><Html5 /><CssThree /></>,
      preview: [boopACatImg],
      repo: 'https://github.com/debccheng/boop-a-cat',
      demo: 'https://debccheng.com/boop-a-cat/',
  };

  const colourContrastChecker = {
    title: 'Colour Contrast Checker',
    date: 'Dec 2020',
    description:
      'This is a simple web app that changes background and foreground colours through either hex \
    input or colour picker. It also calculates the contrast ratio to assess whether the colour \
    combination is accessible according to W3C specs. Built with React hooks.',
    tech: <><ReactJs /><Html5 /><CssThree /></>,
    preview: [ccCheckerImg],
    repo: 'https://github.com/debccheng/contrast-checker',
    demo: 'https://debccheng.github.io/contrast-checker/',
  };

  const bigBrain = {
    title: 'Big Brain',
    date: 'Nov 2020',
    description:
      'A responsive web-based quiz platform modelled off Kahoot. This is pair work, 3-week \
    assignment for COMP6080 at UNSW and heavily relies on React hooks, fetch APIs and Material-UI. \
    For this project I implemented dynamic and auto-submitting forms with Formik, created public, \
    private and unique routes with React Router DOM. I was also responsible for building \
    reusable React components that are unit tested with Enzyme/Jest. The project was tested \
    with Cypress.',
    tech:
      <>
        <ReactJs />
        <Html5 />
        <CssThree />
        <MaterialUi />
        <Reactrouter />
        <Jest />
        <Cypress />
      </>,
    preview: [bigBrainImg1, bigBrainImg2],
    repo: 'https://github.com/debccheng/big-brain'
  };

  const quickPic = {
    title: 'QuickPic',
    date: 'Oct 2020',
    description: 
    ' A responsive SPA based on Instagram built using fetch API and DOM manipulation with Vanilla JS, \
    without any external library. Functionalities implemented include: signup, login, post, edit, \
    comment and like. Extra features include infinite scroll and live updates. This is an individual \
    assignment for COMP6080 at UNSW.',
    tech: <><Javascript /><Html5 /><CssThree /></>,
    preview: [quickpic],
    repo: 'https://github.com/debccheng/quickpic',
  }

  const react2048 = {
    title: 'React 2048',
    date: 'Sep 2020',
    description:
      'A 2048 game which was built initially with vanilla Javascript and then with React for \
    learning purposes. This is the React version.',
    tech: <><ReactJs /><Html5 /><CssThree /></>,
    preview: [react2048Img],
    repo: 'https://github.com/debccheng/react2048',
    demo: 'https://debccheng.com/react2048/',
  };

  return (
    <div className={styles.wrapper}>
      <Project data={boopACat} flip={true} />
      <Project data={colourContrastChecker} flip={false} />
      <Project data={bigBrain} flip={true} />
      <Project data={quickPic} flip={false} />
      <Project data={react2048} flip={true} />

      {/* {
        Object.keys(projects)
          .sort((a, b) => b - a)
          .map((i) => {
            return <div key={i}><ProjectCard data={projects[i]} key={i} /></div>
          })
      } */}
    </div>
  );
}

export default Portfolio;
