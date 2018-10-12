import React, { Component } from 'react';
import Header from '../Header';
import SideMenu from '../SideMenu';
import { Layout } from 'antd';
import './index.css';
const { Content } = Layout;


export default class MainLayout extends Component {
  render() {
    return (
      <Layout className="mainLayout">
        <Header/>
        <Content className="content">
          <Layout className="contentLayout">
            <SideMenu/>  
            <Content className="sideContent">
              {this.props.children}
            </Content>
          </Layout>
        </Content>  
      </Layout>
    );
  }
};

