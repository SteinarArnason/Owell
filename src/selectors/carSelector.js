import _ from 'lodash';

export function filterCar(car) {
  const carInformation = car.toJS().information || {};

  if (Object.keys(carInformation).length !== 0) {
    let filteredCar = _.pick(carInformation, [
      'number',
      'subType',
      'registryNumber',
      'pollution',
      'weight',
    ]);
    return filteredCar;
  }

  return carInformation;
}
