/******************************************
 *  Author : Shanming Liu   
 *  Created On : Fri Jul 23 2021
 *  File : HomePage.js
 *******************************************/

import React from 'react'
import { List, Divider } from 'antd';

const HomePage = () => {
  const frontendStack = [
    <a href="https://reactjs.org/">React – A JavaScript library for building user interfaces </a>,
    <a href="https://redux.js.org/">Redux - A predictable state container for JavaScript apps. | Redux </a>,
    <a href="https://reactrouter.com/">React Router: Declarative Routing for React  </a>,
    <a href="https://ant.design/docs/react/introduce">Ant Design of React - Ant Design </a>,
  ]
  const backendStack = [
    <a href="https://golang.org/">golang</a>,
    <a href="https://pkg.go.dev/github.com/gin-gonic/gin">gin · pkg.go.dev</a>,
    <a href="https://github.com/bxcodec/faker">bxcodec/faker</a>,
    <a href="https://pkg.go.dev/github.com/google/uuid">uuid · pkg.go.dev</a>
  ]

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>This is React demo used in Easystack Devops team</h3>
      <Divider orientation="left" />
      <List
        header={<div>Frontend Stack</div>}
        bordered
        dataSource={frontendStack}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
      <Divider orientation="left" />
      <List
        header={<div>Backend Stack</div>}
        bordered
        dataSource={backendStack}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    </>
  )
}

export default HomePage