import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as carActions from 'actions/carActions';

class CarPage extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.onSubmit = ::this.onSubmit;
  }

  onSubmit(event) {
    const text = event.target.value;
    if (event.which === 13 && text.length > 0) {
      this.props.actions.lookupCarNumber(text);
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1>{ 'Car lookup' }</h1>
        <br />
        <input
          type="text"
          placeholder="Add todo"
          onKeyDown={ this.onSubmit } />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => { //eslint-disable-line
  const carState = state.get('car');
  console.log(carState.toJS());
  return {
    // Map the application state to current file props
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(carActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarPage);
