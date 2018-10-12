import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const SideMenu = withRouter(props => {
  const { location } = props;
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/nested">
          <Link to="/nested">Nested Fragments</Link>
        </Menu.Item>
        <Menu.Item key="/list">
          <Link to="/list">List</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
});

export default SideMenu;