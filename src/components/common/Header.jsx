import React from 'react';
import { Link, IndexLink } from 'react-router';

import styles from 'global.css';

const Header = () => {
  return (
    <nav className={ styles.pageHeader }>
      <IndexLink to="/" activeClassName="active" >{ 'Home' }</IndexLink>
      { " | " }
      <Link to="/todo-list" activeClassName="active" >{ 'Todo List' }</Link>
      { " | " }
      <Link to="/car" activeClassName="active" >{ 'Car Lookup' }</Link>
      { " | " }
      <Link to="/about" activeClassName="active" >{ 'About' }</Link>
    </nav>
  );
};

export default Header;
