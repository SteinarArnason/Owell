import React, { PureComponent, PropTypes } from 'react';

export default class Car extends PureComponent {

  static propTypes = {
    car: PropTypes.shape({
      number: PropTypes.string,
      pollution: PropTypes.string,
      registryNumber: PropTypes.string,
      subType: PropTypes.string,
      weight: PropTypes.string,
    }),
  }

  render() {
    const isEmpty = Object.keys(this.props.car).length === 0;

    if (isEmpty) {
      return null;
    }

    const car = this.props.car;
    return (
      <div>
        <h2>{ `Undertegund: ${ car.subType }` }</h2>
        <h2>{ `Skráningar númer: ${ car.registryNumber }` }</h2>
        <h2>{ `Fast númer: ${ car.number }` }</h2>
        <h2>{ `Mengun: ${ car.pollution }` }</h2>
        <h2>{ `Þyngd: ${ car.weight }` }</h2>
      </div>
    );
  }
};
