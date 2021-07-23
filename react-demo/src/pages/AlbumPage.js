/******************************************
 *  Author : Shanming Liu   
 *  Created On : Thu Jul 22 2021
 *  File : AlbumPage.js
 *******************************************/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { albumActions } from '../actions'

import { AlbumList } from '../components'

const AlbumPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(albumActions.fetchAll())
  }, [dispatch])

  return <AlbumList />
}

export default AlbumPage