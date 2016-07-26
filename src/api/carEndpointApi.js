/* eslint-disable quote-props, key-spacing, no-unused-vars */
import delay from './delay';
import axios from 'axios';

class CarEndpointApi {

  static lookup(carNumber) {
    return axios.get(`http://apis.is/car?number=${ carNumber }`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

}

export default CarEndpointApi;
