import React from 'react';
import styles from './Portfolio.module.css';
import Project from '../components/Project';
import {
  CssThree,
  Html5,
  ReactJs
} from '@icons-pack/react-simple-icons';
import img from '../assets/projects/colour_contrast_checker.png';

const Portfolio = () => {
  const colourContrastChecker = {
    title: 'Colour Contrast Checker',
    description: 
    'This is a simple web app that changes background and foreground colours through either hex \
    input or colour picker. It also calculates the contrast ratio to assess whether the colour \
    combination is accessible according to W3C specs. Built with React hooks.',
    tech: <><ReactJs /><Html5 /><CssThree /></>,
    previewTitle: 'Preview',
    preview: img,
    repo: 'https://github.com/debccheng/contrast-checker',
    demo: 'https://debccheng.github.io/contrast-checker/',
  };

  const react2048 = {
    
  }
  return (
    <div className={styles.wrapper}>
     <Project data={colourContrastChecker} flip={false}/>
    </div>
  );
}

export default Portfolio;
