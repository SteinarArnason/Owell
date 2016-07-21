import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active" >{ 'Home' }</IndexLink>
      { " | " }
      <Link to="/todo-list" activeClassName="active" >{ 'Todo List' }</Link>
      { " | " }
      <Link to="/file-importer" activeClassName="active" >{ 'File Importer' }</Link>
      { " | " }
      <Link to="/about" activeClassName="active" >{ 'About' }</Link>
    </nav>
  );
};

export default Header;
