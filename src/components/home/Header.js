import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <section className="header-container">
          <h1>Expense Tracker</h1>
        </section>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;