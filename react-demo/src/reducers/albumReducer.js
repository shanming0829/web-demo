/******************************************
 *  Author : Shanming Liu   
 *  Created On : Thu Jul 22 2021
 *  File : albums.js
 *******************************************/

import update from 'immutability-helper';
import { albumConstants } from "../constants";

const initialState = {
  'albums': {}
}

const albumsReducer = (state = initialState, action) => {
  var album = null
  switch (action.type) {
    case albumConstants.FETCH_ALL_ALBUMS_RESPONSE:
      return update(state, { albums: { $set: action.payload } })
    case albumConstants.CREAT_ONE_ALBUM_RESPONSE:
      album = action.payload
      return update(state, { albums: { $merge: { [album.id]: album } } })
    case albumConstants.UPDATE_ONE_ALBUM_RESPONSE:
      album = action.payload
      return update(state, { albums: { [album.id]: { $set: album } } })
    case albumConstants.DELETE_ONE_ALBUM_RESPONSE:
      return update(state, { albums: { $unset: [action.payload.id] } })
    default:
      return state;
  }
}

export default albumsReducer
