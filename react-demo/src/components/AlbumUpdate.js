/******************************************
 *  Author : Shanming Liu   
 *  Created On : Fri Jul 23 2021
 *  File : AlbumUpdate.js
 *******************************************/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Input, InputNumber, message } from 'antd';
import update from 'immutability-helper';

import { updateAlbum } from '../actions/albumActions';


const AlbumUpdate = ({ setVisiable, editAlbum }) => {
  const [album, setAlbum] = useState(update({}, { $merge: editAlbum }))
  const dispatch = useDispatch()
  const [form] = Form.useForm();

  const handleOk = () => {
    if (album.title === '' || album.artist === '' || album.price === 0) {
      message.error('Some fields not valid, pls refill them')
    } else {
      dispatch(updateAlbum(album))
      setVisiable(false)
    }
  };

  const onChange = (key, value) => {
    if (key === 'price') {
      value = Number(value) ||
        (message.error('Price field error') && value)
    }
    setAlbum(update(album, { $merge: { [key]: value } }))
  }

  return (
    <Modal title="Update a new album" visible={true}
      onOk={handleOk} onCancel={() => setVisiable(false)} >
      <Form labelCol={{ span: 3 }} wrapperCol={{ span: 20 }}
        layout="horizontal" form={form} >
        <Form.Item label="Title">
          <Input value={album.title} placeholder="The album title"
            onChange={e => onChange('title', e.target.value)} />
        </Form.Item>
        <Form.Item label="Artist">
          <Input value={album.artist} placeholder="The album artist"
            onChange={e => onChange('artist', e.target.value)} />
        </Form.Item>
        <Form.Item label="Price">
          <InputNumber value={album.price} placeholder="The album price"
            onChange={e => onChange('price', e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AlbumUpdate