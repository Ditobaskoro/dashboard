import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { Table } from 'antd';

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'User ID',
  dataIndex: 'userId',
  key: 'userId',
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
}];

export default class List extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      const data = res.data;
      this.setState({ data });
    })
  }
  render() {
    const { data } = this.state;
    return (
      <Table rowKey='id' columns={columns} dataSource={data} pagination={{pageSize: 8}}/>
    );
  }
}
