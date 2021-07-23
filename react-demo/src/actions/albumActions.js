/******************************************
 *  Author : Shanming Liu   
 *  Created On : Thu Jul 22 2021
 *  File : albums.js
 *******************************************/

import { albumConstants as constants } from '../constants'
import { albumService } from '../services'

export const fetchAll = () => {
  return (dispatch) => {
    dispatch({ type: constants.FETCH_ALL_ALBUMS_REQUEST })
    albumService.fetchAll().then((data) => {
      dispatch({
        type: constants.FETCH_ALL_ALBUMS_RESPONSE,
        payload: data
      })
    })
  }
}

export const createAlbum = (album) => {
  return (dispatch) => {
    dispatch({ type: constants.CREAT_ONE_ALBUM_REQUEST, payload: album })
    albumService.createAlbum(album).then((data) => {
      dispatch({
        type: constants.CREAT_ONE_ALBUM_RESPONSE,
        payload: data
      })
    })
  }
}

export const updateAlbum = (album) => {
  return (dispatch) => {
    dispatch({ type: constants.UPDATE_ONE_ALBUM_REQUEST, payload: album })
    albumService.updateAlbum(album).then((data) => {
      dispatch({
        type: constants.UPDATE_ONE_ALBUM_RESPONSE,
        payload: data
      })
    })
  }
}

export const deleteAlbum = (album) => {
  return (dispatch) => {
    dispatch({ type: constants.DELETE_ONE_ALBUM_REQUEST, payload: album })
    albumService.deleteAlbum(album).then(() => {
      dispatch({
        type: constants.DELETE_ONE_ALBUM_RESPONSE,
        payload: album
      })
    })
  }
}