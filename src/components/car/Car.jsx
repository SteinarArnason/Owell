import React, { PropTypes } from 'react';

const Car = ({ number, subType, registryNumber, pollution, weight }) => {
  if (registryNumber === undefined) {
    return null;
  }
  return (
    <div>
      <h2>{ `Undertegund: ${ subType }` }</h2>
      <h2>{ `Skráningar númer: ${ registryNumber }` }</h2>
      <h2>{ `Fast númer: ${ number }` }</h2>
      <h2>{ `Mengun: ${ pollution }` }</h2>
      <h2>{ `Þyngd: ${ weight }` }</h2>
    </div>
  );
};

Car.propTypes = {
  number: PropTypes.string,
  pollution: PropTypes.string,
  registryNumber: PropTypes.string,
  subType: PropTypes.string,
  weight: PropTypes.string,
};

export default Car;
