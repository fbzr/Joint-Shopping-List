import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import listReducer from './slices/list';

const store = configureStore({
  reducer: {list: listReducer},
  middleware: [logger, ...getDefaultMiddleware()],
});

export default store;
