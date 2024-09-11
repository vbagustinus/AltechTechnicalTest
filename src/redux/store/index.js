import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      logger,
      thunkMiddleware,
      serializableCheck: false,
    }),
});

export {store};
