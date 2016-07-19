/* eslint-disable no-unused-vars */
// Import úr node_modules
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import úr öðru
import Header from './common/Header';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// Það þarf alltaf að skilgreina hvaða props component tekur á móti
// isRequired er ekki nauðsynlegt nema fyrir validation ef component-ið
// þarf að innihalda viðkomandi props
/* App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};*/

// mapStateToProps(state, ownProps)
// state hérna er tengingin við REDUX state-ið
// ownProps er eitthvað annað ¯\_(ツ)_/¯ (t.d. params úr url-i)
/* function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}*/

export default connect()(App);
