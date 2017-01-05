import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Car from './Car';
import * as carActions from 'actions/carActions';
import { filterCar } from 'selectors/carSelector';

import defaultStyles from 'global.css';

class CarPage extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    car: PropTypes.object.isRequired,
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
      <div className={ defaultStyles.pageContent }>
        <h1>{ 'Car lookup' }</h1>
        <br />
        <input
          type="text"
          placeholder="Lookup a car"
          onKeyDown={ this.onSubmit } />
        <br />
        <Car car={ this.props.car } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const carState = state.get('car');

  return {
    car: filterCar(carState),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(carActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarPage);
