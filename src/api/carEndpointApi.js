/* eslint-disable quote-props, key-spacing, no-unused-vars */
import delay from './delay';
import superagent from 'superagent';

class CarEndpointApi {

  static lookup(carNumber) {

    /* ajax.get('http://apis.is/car?number=vd689')
      .end((error, response) => {
        if (!error && response) {
          resolve(Object.assign({}, response));
        } else {
          console.log('There was an error fetching the data', error);
        }
      });*/

    /* return new Promise((resolve, reject) => {
      ajax.get(`http://apis.is/car?number=${ carNumber }`)
        .end((error, response) => {
          if (!error && response) {
            debugger;
            resolve(Object.assign({}, response));
          } else {
            console.log('There was an error fetching the data', error);
          }
        });
    });*/

    const paramsUrl = `http://apis.is/car?number=${ carNumber }`;
    console.log(paramsUrl);
    return superagent
      .get(paramsUrl)
      .end((error, response) => {
        if (error) {
          Promise.reject(error);
        }
        throw error;
      });
  }

}

export default CarEndpointApi;
