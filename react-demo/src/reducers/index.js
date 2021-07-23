/******************************************
 *  Author : Shanming Liu
 *  Created On : Thu Jul 22 2021
 *  File : index.js
 *******************************************/


import { combineReducers } from 'redux'
import albumsReducer from './albumReducer'

export default combineReducers({
  "albums": albumsReducer
})