import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Import your individual reducers here
import cartReducer from './cartReducer';

// Combine individual reducers into a root reducer
const rootReducerCombined = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  // Add more reducers here
});

export default rootReducerCombined;