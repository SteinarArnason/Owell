/* eslint-disable react/prefer-stateless-function */
// Imports from node_modules
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Imports from user defined modules/files
import Header from './common/Header';
import Footer from './common/Footer';

// Import styles

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
