/* eslint-disable quote-props, key-spacing, no-unused-vars */
import delay from './delay';
import axios from 'axios';
import request from 'superagent';

class CarEndpointApi {

  static lookupAxios(carNumber) {
    // You can also create a config object for axios and pass it as a
    // second parameter. Like so:
    // axios.get('http://apis.is/car', {params:{number:carNumber}})...
    return axios.get(`http://apis.is/car?number=${ carNumber }`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  static lookupSuperagent(carNumber) {
    return request.get('http://apis.is/car')
      .query({ number: carNumber })
      .then((response) => {
        return response.body;
      })
      .catch((error) => {
        throw error;
      });
  }

}

export default CarEndpointApi;
