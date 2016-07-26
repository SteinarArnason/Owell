/* eslint-disable quote-props, key-spacing, no-unused-vars */
import delay from './delay';

const results = {
  'results': [
    {
      'type': 'TOYOTA - AVENSIS (Ljósgrár)',
      'subType': 'AVENSIS',
      'color': 'Ljósgrár',
      'registryNumber': 'VD689',
      'number': 'VD689',
      'factoryNumber': 'SB1BR56L80E089062',
      'registeredAt': '20.09.2004',
      'pollution': '187 g/km',
      'weight': '1318 kg',
      'status': 'Í lagi',
      'nextCheck': '01.09.2016',
    }
  ]
};

class CarEndpointApi {

  static lookup(carNumber) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, results));
      }, delay);
    });
  }

}

export default CarEndpointApi;
