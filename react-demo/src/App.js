import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Space } from 'antd';
import {
  PieChartOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

import { HomePage, AlbumPage } from './pages'

import './App.css';

const { Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapse] = useState(false);

  const onCollapse = collapsed => {
    setCollapse(collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <Space>
                  <PieChartOutlined />
                  Home
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/albums">
                <Space>
                  <DatabaseOutlined />
                  Albums
                </Space>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '16px' }}>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/albums" exact>
                <AlbumPage />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
