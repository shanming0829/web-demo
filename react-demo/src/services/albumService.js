/******************************************
 *  Author : Shanming Liu   
 *  Created On : Thu Jul 22 2021
 *  File : albums.js
 *******************************************/

import { getData, postData, updateData, deleteData } from './baseService'

export const fetchAll = () => {
  return getData('/api/albums/')
}

export const createAlbum = (album) => {
  return postData('/api/albums/', album)
}

export const updateAlbum = (album) => {
  return updateData(`/api/albums/${album.id}`, album)
}

export const deleteAlbum = (album) => {
  return deleteData(`/api/albums/${album.id}`)
}