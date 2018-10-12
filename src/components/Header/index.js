import React, { Component } from 'react';
import './index.css';
import { Layout } from 'antd';
const { Header } = Layout;

export default class Head extends Component {
  render() {
    return (
      <Header className="header">
        <div className="header-title">Dashboard App</div>
      </Header>
    );
  }
}