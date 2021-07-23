/******************************************
 *  Author : Shanming Liu   
 *  Created On : Thu Jul 22 2021
 *  File : store.js
 *******************************************/

import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

export default function configureStore() {
  const middlewares = [logger, thunkMiddleware]

  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  return store
}