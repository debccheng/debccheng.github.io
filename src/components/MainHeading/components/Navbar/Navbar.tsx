import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: FC = () => {
  console.log('placeholder');
  return (
    <Router>
      <nav className={styles.navbar}>
        <ul className={styles.navGroup}>
          <li className={styles.navList}>
            <Link to="/" className={styles.linkButton} type="button">Home</Link>
          </li>
          <li className={styles.navList}>
            <Link to="/about" className={styles.linkButton} type="button">About</Link>
          </li>
          <li className={styles.navList}>
            <Link to="/portfolio" className={styles.linkButton} type="button">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/portfolio" />
      </Switch>
    </Router>
  );
};

export default Navbar;
