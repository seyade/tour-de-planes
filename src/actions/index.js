import axios from 'axios';

export const FETCH_ALL_PLANES = 'FETCH_ALL_PLANES';

const API_KEY = {
  avaiationEdge: '22d0e2-5de5a8',
  IATACode: 'ee578ab6-2132-41ff-a311-c3b152941942',
};

const API_URL = {
  avaiationEdge: `https://aviation-edge.com/v2/public/airplaneDatabase?key=${
    API_KEY.avaiationEdge
  }`,
  IATACode: `https://iatacodes.org/api/v6/aircrafts?api_key=ee578ab6-2132-41ff-a311-c3b152941942`,
};

// IATACode

export const fetchAllPlanes_old = () => {
  axios.get(API_URL).then(response => {
    return {
      type: FETCH_ALL_PLANES,
      payload: response,
    };
  });
};

export const fetchAllPlanes_temp = () => dispatch => {
  console.log('FETCH PLANES!!!!!!!');

  return axios
    .get(API_URL.IATACode)
    .then(res => {
      console.log('FETCH PLANES RESPONSE!!!!!!!', res);

      dispatch({
        type: FETCH_ALL_PLANES,
        payload: res,
      });
    })
    .catch(error => console.log('Oops!!', error));
};

export function fetchAllPlanes() {
  console.log('FETCH PLANES TEMP!!!!!!!');

  return function(dispatch) {
    return axios
      .get(API_URL.IATACode, {
        'Content-Type': 'application/json',
      })
      .then(res => {
        console.log('FETCH PLANES RESP!!!!!!!', res);

        dispatch({
          type: FETCH_ALL_PLANES,
          payload: res.data,
        });
      });
  };
}
