import constants from 'constants';
// import carEndpointApi from 'api/mockCarEndpointApi';
import carEndpointApi from 'api/carEndpointApi';

export function carLookupSuccess(result) {
  return { type: constants.CAR.LOOKUP_SUCCESS, result };
}

export function lookupCarNumber(carNumber) {

  /* return function(dispatch) {
    return carEndpointApi.lookup(carNumber)
      .then((result) => {
        dispatch(carLookupSuccess(result));
      }).catch((error) => {
        throw error;
      });
  };*/

  return function(dispatch) {
    return carEndpointApi.lookup(carNumber)
      .then((resolve) => {
        console.log('Promise resolve');
        console.log(resolve);
        resolve(Object.assign({}, resolve));
      }, (reject) => {
        console.log('Promise reject');
        console.log(reject);
      });
  };

}
