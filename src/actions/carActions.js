import constants from 'constants';
// import carEndpointApi from 'api/mockCarEndpointApi';
import carEndpointApi from 'api/carEndpointApi';

export function carLookupSuccess(result) {
  return { type: constants.CAR.LOOKUP_SUCCESS, result };
}

export function lookupCarNumber(carNumber) {

  return function(dispatch) {
    return carEndpointApi.lookup(carNumber)
      .then((data) => {
        dispatch(carLookupSuccess(data.results[0]));
      })
      .catch((error) => {
        throw error;
      });
  };

}
