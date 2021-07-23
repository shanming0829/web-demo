/******************************************
 *  Author : Shanming Liu   
 *  Created On : Thu Jul 22 2021
 *  File : AlbumList.js
 *******************************************/

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Space } from 'antd';

import { AlbumCreate, AlbumUpdate } from '.';

import { deleteAlbum } from '../actions/albumActions';


const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Artist',
    dataIndex: 'artist',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
];

const AlbumList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [adding, setAdding] = useState(false);
  const [editAlbum, setEditAlbum] = useState(false);
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.albums);
  const albumList = Object.values(albums);

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const onDelete = () => {
    selectedRowKeys.forEach(key => {
      dispatch(deleteAlbum(albums[key]))
    })
    setSelectedRowKeys([])
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Space direction="horizontal" size='large' style={{ width: '100%' }}>
          <Button type="primary" danger disabled={!hasSelected}
            onClick={onDelete}>Delete</Button>
          <Button type="primary" onClick={() => setAdding(true)}>Add</Button>
        </Space>
      </div>
      <Table rowSelection={rowSelection}
        columns={columns} dataSource={albumList}
        rowKey={album => album.id}
        onRow={album => {
          return {
            onDoubleClick: event => { setEditAlbum(album) }
          };
        }} />
      {adding && <AlbumCreate setVisiable={setAdding} />}
      {editAlbum && <AlbumUpdate setVisiable={setEditAlbum} editAlbum={editAlbum} />}
    </div>
  )
}

export default AlbumList
