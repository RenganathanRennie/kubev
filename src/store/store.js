
import { configureStore } from '@reduxjs/toolkit'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import rootReducer from './rootReducerCombined'; // Import your combined reducers here

// Create a persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with configureStore
export const storeK = configureStore({
  reducer: persistedReducer,
  // Add middleware or other options here
});

export const persister = persistStore(storeK);