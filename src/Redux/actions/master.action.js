// actions.js

import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const fetchDataRequest = () => ({
  type: actionTypes.FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    axios
      .get('your-api-endpoint')
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error));
      });
  };
};
