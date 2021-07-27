import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styles from './Navbar.module.css';
import About from '../../pages/About/About';

const Navbar: FC = () => (
  <Router>
    <nav className={styles.navbar}>
      <ul className={styles.navGroup}>
        <li className={styles.navList}>
          <Link to="/" className={styles.linkButton} type="button">
            About
          </Link>
        </li>
        <li className={styles.navList}>
          <Link to="/portfolio" className={styles.linkButton} type="button">
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route path="/portfolio" />
    </Switch>
  </Router>
);

export default Navbar;
