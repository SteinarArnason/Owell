import Immutable from 'immutable';

import { filterCar } from './carSelector';

describe('carSelector', () => {

  it('should return an empty object when it receives an empty Immutable object', () => {
    // arrange
    const emptyImmutableObject = Immutable.fromJS({});

    // act
    const result = filterCar(emptyImmutableObject);

    // assert
    expect(result).toEqual({});
  });

  it('should return an empty object when it receives an Immutable object with empty information', () => {
    // arrange
    const emptyImmutableObject = Immutable.fromJS({ information: {} });

    // act
    const result = filterCar(emptyImmutableObject);

    // assert
    expect(result).toEqual({});
  });

  it('should return a filtered object when it receives an Immutable object with car information', () => {
    // arrange
    const carInformation = Immutable.fromJS({
      information: {
        number: 'some value',
        subType: 'some value',
        registryNumber: 'some value',
        pollution: 'some value',
        weight: 'some value',
        testerino: 'some value',
      },
    });

    // act
    const result = filterCar(carInformation);

    // assert
    const expectedFilteredCarInformation = {
      number: 'some value',
      subType: 'some value',
      registryNumber: 'some value',
      pollution: 'some value',
      weight: 'some value',
    };
    expect(result).toEqual(expectedFilteredCarInformation);
  });

});
