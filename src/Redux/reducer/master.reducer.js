// reducers.js

import * as actionTypes from './ActionTypes';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
