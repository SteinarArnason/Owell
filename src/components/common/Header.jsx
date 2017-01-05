import React, { PureComponent } from 'react';
import { Link, IndexLink } from 'react-router';

import styles from 'global.css';

export default class Header extends PureComponent {
  render() {
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
  }
}
