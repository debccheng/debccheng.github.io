import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styles from './Navbar.module.css';
import About from '../../pages/About/About';
import Portfolio from '../../pages/Portfolio/Portfolio';

const Navbar: FC = () => (
  <Router>
    <nav className={styles.navbar}>
      <ul className={styles.navGroup}>
        <li className={styles.navList}>
          <Link to="/" className={styles.linkButton}>
            About
          </Link>
        </li>
        <li className={styles.navList}>
          <Link to="/portfolio" className={styles.linkButton}>
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
    </Switch>
  </Router>
);

export default Navbar;
